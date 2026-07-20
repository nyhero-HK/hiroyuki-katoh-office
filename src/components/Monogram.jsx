/**
 * HK. — the office monogram (editorial style).
 * Fraunces bold with a single vermillion full stop; `dark` inverts for ink backgrounds.
 */
const Monogram = ({ className = '', dark = false }) => (
  <span
    aria-hidden="true"
    className={`font-display font-bold leading-none tracking-[-0.04em] select-none ${
      dark ? 'text-washi-50' : 'text-ink-900'
    } ${className}`}
  >
    HK<span className="text-shu-500">.</span>
  </span>
);

export default Monogram;
