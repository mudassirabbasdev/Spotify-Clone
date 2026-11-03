import { cx } from "../../lib/cx";

// Round icon-only button. `label` is required so every icon button is accessible.
export default function IconButton({ icon, label, className, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cx(
        "grid size-10 shrink-0 place-items-center rounded-full bg-surface-raised text-base text-white transition hover:bg-surface-pressed active:scale-95",
        className
      )}
      {...props}
    >
      <i className={`fa-solid ${icon}`} aria-hidden="true" />
    </button>
  );
}
