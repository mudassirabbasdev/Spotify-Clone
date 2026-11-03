import { libraryBoxes } from "../../data/library";
import { legalLinks } from "../../data/navigation";
import { cx } from "../../lib/cx";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Backdrop for the mobile drawer */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cx(
          "fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        aria-label="Your library"
        className={cx(
          "fixed top-[72px] bottom-2 left-2 z-50 flex w-[min(340px,calc(100vw-1rem))] flex-col rounded-xl bg-surface p-3 transition-transform duration-300",
          "lg:static lg:z-auto lg:w-[340px] lg:shrink-0 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-[120%]"
        )}
      >
        <div className="flex items-center justify-between gap-2 px-2 pt-2 pb-3">
          <h2 className="text-base font-bold">Your Library</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <i className="fa-solid fa-plus" aria-hidden="true" />
              Create
            </Button>
            <div className="lg:hidden">
              <IconButton icon="fa-xmark" label="Close library" onClick={onClose} />
            </div>
          </div>
        </div>

        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-1 pb-2">
          {libraryBoxes.map((box) => (
            <div key={box.title} className="rounded-lg bg-surface-raised p-4">
              <p className="font-semibold">{box.title}</p>
              <p className="mt-1 text-sm text-muted">{box.text}</p>
              <Button size="sm" className="mt-3">
                {box.cta}
              </Button>
            </div>
          ))}
        </div>

        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 px-2 pb-1 text-xs text-muted">
          {legalLinks.map((link) => (
            <li key={link}>
              <a href="#" className="no-underline transition hover:text-white">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
