import { useMemo, useState } from "react";
import { filters, sections } from "../data/sections";
import { cx } from "../lib/cx";
import Shelf from "../components/home/Shelf";
import EmptyState from "../components/home/EmptyState";
import Footer from "../components/layout/Footer";

export default function HomePage({ query, onClearQuery }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sections
      .filter((s) => activeFilter === "all" || s.category === activeFilter)
      .map((s) => ({
        ...s,
        items: s.items.filter((item) => !q || `${item.title ?? ""} ${item.info}`.toLowerCase().includes(q)),
      }))
      .filter((s) => s.items.length > 0);
  }, [query, activeFilter]);

  return (
    <div className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="sticky top-0 z-10 -mx-4 flex gap-2 overflow-x-auto bg-surface/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        {filters.map((f) => {
          const active = activeFilter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setActiveFilter(f.id)}
              className={cx(
                "shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition",
                active ? "bg-white text-black" : "bg-surface-raised text-white hover:bg-surface-pressed"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <h1 className="sr-only">Home</h1>

      {visibleSections.length > 0 ? (
        visibleSections.map((s) => <Shelf key={s.id} title={s.title} items={s.items} round={s.round} />)
      ) : (
        <EmptyState query={query} onClear={onClearQuery} />
      )}

      <Footer />
    </div>
  );
}
