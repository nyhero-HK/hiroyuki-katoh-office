import { cubicBezier, motion, useTransform } from 'framer-motion';
import { cue } from './cue';

/**
 * The device kit, ported from scroll-craft's references/devices.md.
 * Rules encoded here rather than left to the caller:
 *   - a cue is OPACITY with a plateau, never a triangle
 *   - a parallax plane travels `rate * (p - 0.5) * 100` PIXELS, not viewport fractions
 *   - copy always rides at 1x and never sits on a plane
 *   - a kinetic line mask reserves room for descenders
 */

/** `pin` state: one cue'd layer inside a pinned stage. Opacity only. */
export const Cue = ({ progress, spec, className = '', children, ...rest }) => {
  const { input, output } = cue(spec);
  const opacity = useTransform(progress, input, output);
  return (
    <motion.div style={{ opacity }} className={className} {...rest}>
      {children}
    </motion.div>
  );
};

/**
 * `parallax` plane. Rate is in hundreds of pixels: 0.3–1.5 inside a frame,
 * 1–2 for a full-bleed bed. Adjacent planes should differ by 10–30%; past
 * ~200px of total travel it stops reading as depth and starts reading as a bug.
 * Negative moves up faster than the page, which pushes the plane back.
 */
export const Plane = ({ progress, rate, className = '', children, ...rest }) => {
  const y = useTransform(progress, [0, 1], [rate * -50, rate * 50]);
  return (
    <motion.div style={{ y }} className={className} {...rest}>
      {children}
    </motion.div>
  );
};

/**
 * `kinetic`: each line slides up from behind a mask so it enters from a clean
 * edge rather than simply fading. The mask carries bottom padding pulled back
 * by a negative margin — a mask clipped to the line box shears the tails off
 * g, y, p and j, which is the commonest way this effect looks broken.
 * One kinetic headline per act, at most.
 */
export const Kinetic = ({ lines, className = '', lineClassName = '', delay = 0, still = false }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.16em] -mb-[0.16em]">
        {still ? (
          <span className={`block ${lineClassName}`}>{line}</span>
        ) : (
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: '112%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.8, delay: delay + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        )}
      </span>
    ))}
  </span>
);

/**
 * `count`. Only real numbers — a counter is a truth claim with motion attached.
 * The target is written exactly as it should render; any non-digit prefix or
 * suffix (+, %, 名) is preserved and only the number is driven.
 */
export const Count = ({ progress, spec, target, className = '', still = false }) => {
  const m = String(target).match(/^(\D*)([\d,.]+)(.*)$/);
  const pre = m ? m[1] : '';
  const post = m ? m[3] : '';
  const end = m ? parseFloat(m[2].replace(/,/g, '')) : 0;
  const dec = m && m[2].includes('.') ? m[2].split('.')[1].length : 0;
  const grouped = m ? m[2].includes(',') || end >= 10000 : false;

  const { input, output } = cue(spec);
  const t = useTransform(progress, input, output);
  const text = useTransform(t, (v) => {
    const n = end * Math.min(Math.max(v, 0), 1);
    const s = n.toFixed(dec);
    return pre + (grouped ? Number(s).toLocaleString('en-US', { minimumFractionDigits: dec }) : s) + post;
  });
  if (still) return <span className={`tabular-nums ${className}`}>{target}</span>;
  return <motion.span className={`tabular-nums ${className}`}>{text}</motion.span>;
};

/**
 * `assemble`: blocks fly in from beyond their own corner and lock into a grid.
 *
 * This is `kinetic` applied to blocks instead of type — units entering from a
 * clean edge and coming to rest as a composition. It exists because a pinned
 * stage holding one small element reads as a rendering fault: devices.md's
 * "a wipe on a small element is a fidget, use it big" is about wipes, but the
 * same thing is true of a pinned frame. Fill the stage or do not pin.
 *
 * Light is directional, not a halo: the leading edge carries a thin accent rim
 * while the card travels and loses it on landing, and the elevation shadow has
 * real offset and blur. scroll-craft bans gradient text, neon glow and
 * zero-offset coloured halo shadows; none of those are used here.
 */
const settle = cubicBezier(0.16, 1, 0.3, 1);


export const Assemble = ({
  progress, from, to, dx = 0, dy = 0, rotate = 0,
  className = '', children,
}) => {
  const e = useTransform(progress, [from, to], [0, 1], { clamp: true, ease: settle });
  const x = useTransform(e, [0, 1], [dx, 0]);
  const y = useTransform(e, [0, 1], [dy, 0]);
  const rot = useTransform(e, [0, 1], [rotate, 0]);
  const scale = useTransform(e, [0, 1], [0.82, 1]);
  const opacity = useTransform(e, [0, 0.3, 1], [0, 1, 1]);
  // motion blur while travelling, sharp on landing — the thing that reads as fluid
  const filter = useTransform(e, (v) => `blur(${((1 - v) * 9).toFixed(2)}px)`);
  // elevation: high and soft in flight, low and tight at rest
  const boxShadow = useTransform(e, (v) => {
    const t = 1 - v;
    return `0 ${(10 + t * 46).toFixed(0)}px ${(24 + t * 56).toFixed(0)}px ` +
           `-${(12 + t * 8).toFixed(0)}px rgb(0 0 0 / ${(0.45 + t * 0.3).toFixed(2)})`;
  });
  // directional rim on the leading edge, fading out as the card comes to rest
  const rim = useTransform(e, [0, 1], [0.5, 0]);

  return (
    <motion.div
      style={{ x, y, rotate: rot, scale, opacity, filter, boxShadow, willChange: 'transform' }}
      className={`relative ${className}`}
    >
      {children}
      <motion.span
        aria-hidden="true"
        style={{ opacity: rim }}
        className="pointer-events-none absolute inset-0 border-t border-l border-accent"
      />
    </motion.div>
  );
};
