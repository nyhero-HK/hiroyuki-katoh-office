import { useAnimationFrame, useMotionValue } from 'framer-motion';

/**
 * The playhead is lerped (devices.md, `scrub` §"The playhead is lerped").
 *
 * Scroll never writes the position directly. It writes a TARGET, and a rAF loop
 * walks toward it at a fixed fraction per frame. Wheel events do not arrive at a
 * constant rate, so a 1:1 write reproduces every gap in them and reads as a
 * stutter rather than a glide. Measured on this page before it was added: under
 * a lumpy wheel pattern a card moved on 12 of 90 frames and jumped up to 184px
 * in a single frame.
 *
 * Rate 0.18 per frame, clamped 0.02..1 and never 0 (a 0 lerp is a playhead that
 * never moves). Deadband so a write too small to see does not cost a paint.
 * Under reduced motion the rate is 1.0 — no smoothing at all.
 */
export function useLerped(source, { rate = 0.18, deadband = 0.0004, off = false } = {}) {
  const out = useMotionValue(source.get());
  const r = off ? 1 : Math.min(Math.max(rate, 0.02), 1);
  useAnimationFrame(() => {
    const target = source.get();
    const cur = out.get();
    const d = target - cur;
    if (d === 0) return;              // already arrived: stop touching it
    if (Math.abs(d) < deadband) { out.set(target); return; }
    out.set(r === 1 ? target : cur + d * r);
  });
  return out;
}
