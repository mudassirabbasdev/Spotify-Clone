import { libraryBoxes, legalLinks } from "../data";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="library">
        <div className="options">
          <div className="lib-option">
            <h1 className="heading">Your Library</h1>
          </div>
          <div className="icons">
            <button type="button" className="btn btn-outline-light">
              <i className="fa-solid fa-plus"></i> Create
            </button>
          </div>
        </div>
        <div className="lib-boxes">
          {libraryBoxes.map((b) => (
            <div className="box" key={b.title}>
              <p className="box-p1">{b.title}</p>
              <p className="box-p2">{b.text}</p>
              <button className="badge">{b.cta}</button>
            </div>
          ))}
        </div>
        <div className="QUc50FGWIq8Tqrrr">
          <div className="MBfpqcKfONw47JvN">
            <div className="iLJbxB">
              {legalLinks.map((l) => (
                <div className="fpldHl" key={l}><span>{l}</span></div>
              ))}
            </div>
            <a href="#">cookies</a>
          </div>
          <div className="xygda4KBbJQD7GVH"></div>
        </div>
      </div>
    </div>
  );
}
