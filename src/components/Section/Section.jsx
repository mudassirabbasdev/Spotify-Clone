export default function Section({ title, cards }) {
  return (
    <>
      <h2 className="my-[0.83em] text-[1.5rem] font-bold">{title}</h2>
      <div className="flex flex-wrap">
        {cards.map((c, i) => (
          <div className="mt-4 ml-6 box-content w-[150px] rounded-lg bg-[#232323] p-4" key={i}>
            <img src={c.img} className="inline w-full rounded-lg align-baseline" alt={c.title || c.info} />
            {c.title && <p className="my-[1em] text-[1rem] font-medium">{c.title}</p>}
            <p className="my-[1em] text-[0.75rem] opacity-75">{c.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
