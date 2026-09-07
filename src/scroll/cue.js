/**
 * The cue contract, ported from scroll-craft's device kit (references/devices.md
 * §2 "The cue contract"). This is NOT a fade-in: the point is the PLATEAU.
 *
 *   cue("0.2")                → in at 0.2, holds to the end of the act
 *   cue("0.1 0.6")            → in, plateau, out. Ramps default to 30% of the window
 *   cue("0 0.78 0")           → greet: already at full opacity when the act begins
 *   cue("0.1 0.9 0.15 0.4")   → fast in, long slow out
 *   cue("0 1 0 0")            → greet and hold
 *
 * Without a plateau a cue is a triangle that touches full opacity for a single
 * instant, so the reader has to stop on exactly the right pixel to see the line
 * at full strength and every heading reads slightly faded.
 *
 * Returns { input, output } keyframes for framer-motion's useTransform.
 */
export function cue(spec) {
  const n = String(spec).trim().split(/\s+/).map(Number);
  const [from, to, rampIn, rampOut] = n;
  const hold = n.length === 1 || !Number.isFinite(to);
  const end = hold ? 1 : to;
  const win = Math.max(end - from, 0.0001);
  const rIn = Number.isFinite(rampIn) ? rampIn : win * 0.3;
  const rOut = Number.isFinite(rampOut) ? rampOut : win * 0.3;

  const input = [];
  const output = [];
  const push = (t, v) => {
    const c = Math.min(Math.max(t, 0), 1);
    if (input.length && c <= input[input.length - 1]) return;
    input.push(c);
    output.push(v);
  };

  if (rIn <= 0) {
    push(0, 1);                       // greet: lit before the act starts moving
    if (from > 0) push(from, 1);
  } else {
    push(Math.max(from - 0.0001, 0), 0);
    push(from + rIn, 1);
  }
  if (hold || rOut <= 0) {
    push(1, 1);                       // only the last act may hold
  } else {
    push(Math.max(end - rOut, from + rIn + 0.0001), 1);
    push(end, 0);
    push(1, 0);
  }
  return { input, output };
}

/** Split a string into line-ish units for `kinetic`. JA has no spaces, so we
 *  take author-supplied phrases rather than guessing at word boundaries. */
export function lines(value) {
  return Array.isArray(value) ? value : [value];
}
