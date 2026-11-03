import Button from "../ui/Button";

export default function EmptyState({ query, onClear }) {
  return (
    <div className="flex flex-col items-center py-24 text-center">
      <i className="fa-solid fa-magnifying-glass mb-5 text-4xl text-muted" aria-hidden="true" />
      <h2 className="text-xl font-bold">
        {query ? `No results for "${query}"` : "Nothing to show yet"}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-muted">
        Check the spelling or try a different song, artist or playlist.
      </p>
      {query && (
        <Button variant="primary" className="mt-6" onClick={onClear}>
          Clear search
        </Button>
      )}
    </div>
  );
}
