/**
 * HK. — the office monogram (editorial style).
 * Colour follows the surface it sits on: `text-content` resolves through the
 * role tokens, so the mark is correct on the dark ground and on a lit plate
 * without a prop. `dark` is accepted and ignored, for callers not yet updated.
 */
// eslint-disable-next-line no-unused-vars
const Monogram = ({ className = '', dark = false }) => (
  <span
    aria-hidden="true"
    className={`font-display font-normal leading-none tracking-[-0.04em] select-none text-content ${className}`}
  >
    HK<span className="text-accent">.</span>
  </span>
);

export default Monogram;
