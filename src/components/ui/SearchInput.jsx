import { cx } from "../../lib/cx";

export default function SearchInput({ value, onChange, placeholder = "What do you want to play?", className }) {
  return (
    <div className={cx("relative w-full", className)}>
      <i
        className="fa-solid fa-magnifying-glass pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm text-neutral-500"
        aria-hidden="true"
      />
      <input
        type="text"
        aria-label="Search songs, artists and playlists"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-full bg-white pr-11 pl-11 text-sm text-black placeholder:text-neutral-500 focus:ring-2 focus:ring-white/60 focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute top-1/2 right-2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-neutral-600 hover:bg-black/10 hover:text-black"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
