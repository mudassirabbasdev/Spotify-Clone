export default function SearchBar({ value, onChange, placeholder = "What do you want to play?" }) {
  return (
    <div className="flex h-12 w-full max-w-[720px] items-center rounded-full bg-[#1f1f1f] pr-2 pl-4 transition-colors hover:bg-[#2a2a2a] focus-within:bg-[#2a2a2a] focus-within:ring-2 focus-within:ring-white/30">
      <i className="fa-solid fa-magnifying-glass mr-3 text-lg text-[#d4d4d4]" aria-hidden="true" />

      <input
        type="text"
        aria-label="Search songs, artists and playlists"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-0 flex-1 bg-transparent text-[15px] text-white placeholder:text-[#b3b3b3] focus:outline-none"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="mr-1 grid size-8 place-items-center rounded-full text-[#b3b3b3] hover:text-white"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      )}

      <span className="mx-2 hidden h-6 w-px bg-[#4d4d4d] sm:block" aria-hidden="true" />

      <button
        type="button"
        aria-label="Browse"
        className="hidden size-10 shrink-0 place-items-center rounded-full text-[#d4d4d4] transition hover:scale-110 hover:text-white sm:grid"
      >
        <i className="fa-solid fa-box-archive text-lg" aria-hidden="true" />
      </button>
    </div>
  );
}