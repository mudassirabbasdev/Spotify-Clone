import { footerColumns, legalLinks, socialLinks } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 pt-10 pb-8">
      <nav aria-label="Footer" className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-bold text-white">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted no-underline transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-full bg-surface-pressed text-white transition hover:scale-105 hover:bg-[#3a3a3a]"
            >
              <i className={`fa-brands ${s.icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
          {legalLinks.map((link) => (
            <li key={link}>
              <a href="#" className="no-underline transition hover:text-white">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-xs text-muted">© {new Date().getFullYear()} Spotify Web Player. All rights reserved.</p>
    </footer>
  );
}
