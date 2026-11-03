import MediaCard from "./MediaCard";
import Button from "../ui/Button";

export default function Shelf({ title, items, round = false }) {
  return (
    <section aria-label={title} className="mb-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
        <Button variant="ghost" size="sm" className="hover:underline">
          Show all
        </Button>
      </div>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {items.map((item, i) => (
          <MediaCard key={`${item.title ?? item.info}-${i}`} item={item} round={round} />
        ))}
      </ul>
    </section>
  );
}
