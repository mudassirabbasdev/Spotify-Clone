import { cx } from "../../lib/cx";

export default function MediaCard({ item, round = false }) {
  const primary = item.title ?? item.info;
  const secondary = item.title ? item.info : null;

  return (
    <li className="group rounded-lg bg-surface-card p-4 transition-colors duration-300 hover:bg-surface-card-hover">
      <div className="relative mb-4 aspect-square">
        <img
          src={item.img}
          alt=""
          loading="lazy"
          className={cx(
            "size-full object-cover shadow-lg",
            round ? "rounded-full" : "rounded-md"
          )}
        />
        <button
          type="button"
          aria-label={`Play ${primary}`}
          className="absolute right-2 bottom-2 grid size-12 translate-y-2 place-items-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100 hover:scale-105"
        >
          <i className="fa-solid fa-play ml-0.5" aria-hidden="true" />
        </button>
      </div>

      <p className={cx("font-semibold", item.title ? "truncate" : "line-clamp-2", round && "text-center")}>
        {primary}
      </p>
      {secondary && (
        <p className={cx("mt-1 truncate text-sm text-muted", round && "text-center")}>{secondary}</p>
      )}
    </li>
  );
}
