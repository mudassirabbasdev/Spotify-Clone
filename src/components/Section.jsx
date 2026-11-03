export default function Section({ title, cards }) {
  return (
    <>
      <h2 className="heading-card">{title}</h2>
      <div className="card-container">
        {cards.map((c, i) => (
          <div className="card" key={i}>
            <img src={c.img} className="card-img" alt={c.title || c.info} />
            {c.title && <p className="card-title">{c.title}</p>}
            <p className="card-info">{c.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
