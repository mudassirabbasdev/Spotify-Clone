import { navLinks } from "../../data/navigation";
import { asset } from "../../lib/assets";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
    <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z" />
  </svg>
);

const BrowseIcon = () => (
  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8" />
    <path d="M5 8h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" />
    <path d="M3 15h4.5a4.5 4.5 0 0 0 9 0H21" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
    <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
  </svg>
);

const linkClass =
  "text-[15px] font-bold text-[#b3b3b3] no-underline transition hover:scale-105 hover:text-white";

export default function Navbar({ query, onQuery, onToggleSidebar }) {
  return (
    <header className="fixed inset-x-0 top-0 z-[1000] flex h-[72px] items-center gap-2 bg-black px-3 sm:px-4 lg:px-6">
      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle library"
          className="grid size-12 place-items-center rounded-full bg-[#1f1f1f] text-white lg:hidden"
        >
          <i className="fa-solid fa-bars" aria-hidden="true" />
        </button>

        <img src={asset("images/brand/icon.png")} alt="Spotify" className="size-9 object-contain" />

        <button
          type="button"
          aria-label="Home"
          className="hidden size-12 place-items-center rounded-full bg-[#1f1f1f] text-white transition hover:scale-105 hover:bg-[#2a2a2a] sm:grid"
        >
          <HomeIcon />
        </button>
      </div>

      <div className="min-w-0 max-w-[475px] flex-1">
        <div className="flex h-12 w-full items-center rounded-full bg-[#1f1f1f] pr-1 pl-3 text-[#b3b3b3] transition-colors hover:bg-[#2a2a2a] focus-within:bg-[#2a2a2a] focus-within:text-white focus-within:ring-2 focus-within:ring-white">
          <span className="grid size-10 shrink-0 place-items-center">
            <SearchIcon />
          </span>

          <input
            type="text"
            aria-label="Search songs, artists and playlists"
            placeholder="What do you want to play?"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            className="min-w-0 flex-1 bg-transparent px-1 text-base text-white placeholder:text-[#b3b3b3] focus:outline-none"
          />

          {query && (
            <button
              type="button"
              onClick={() => onQuery("")}
              aria-label="Clear search"
              className="grid size-9 shrink-0 place-items-center rounded-full hover:text-white"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
          )}

          <span className="mx-1 h-6 w-px shrink-0 bg-[#7c7c7c]" aria-hidden="true" />

          <button
            type="button"
            aria-label="Browse"
            className="grid size-11 shrink-0 place-items-center rounded-full transition hover:scale-105 hover:text-white"
          >
            <BrowseIcon />
          </button>
        </div>
      </div>

      <nav aria-label="Account" className="ml-auto flex shrink-0 items-center gap-4">
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className={linkClass}>
              {link}
            </a>
          ))}
        </div>

        <span className="mx-2 hidden h-7 w-px bg-[#7c7c7c] min-[1180px]:block" aria-hidden="true" />

        <button type="button" className={`${linkClass} hidden items-center gap-2 px-2 min-[1180px]:flex`}>
          <i className="fa-solid fa-circle-arrow-down text-lg" aria-hidden="true" />
          Install App
        </button>

        <button type="button" className={`${linkClass} hidden px-2 sm:block`}>
          Sign up
        </button>

        <button
          type="button"
          className="h-12 rounded-full bg-white px-8 text-[15px] font-bold text-black transition hover:scale-105 active:scale-95"
        >
          Log in
        </button>
      </nav>
    </header>
  );
}
