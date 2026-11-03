import { cx } from "../../lib/cx";

const variants = {
  primary: "bg-white text-black hover:scale-105 hover:bg-white",
  outline: "border border-[#727272] bg-transparent text-white hover:border-white",
  subtle: "bg-surface-raised text-white hover:bg-surface-pressed",
  ghost: "bg-transparent text-muted hover:text-white",
};

const sizes = {
  sm: "h-8 px-3.5 text-xs",
  md: "h-10 px-5 text-sm",
};

export default function Button({ variant = "primary", size = "md", className, children, ...props }) {
  return (
    <button
      type="button"
      className={cx(
        "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
