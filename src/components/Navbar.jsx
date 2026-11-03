import { navLinks } from "../data";

export default function Navbar({ query, onQuery }) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src="./assets/icon.png" className="logo" alt="Spotify" />
        <i className="fa-solid fa-house"></i>
      </div>
      <div className="nav-center">
        <input
          type="text"
          placeholder="What do you want to play?"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
      </div>
      <div className="nav-right">
        {navLinks.map((l) => (
          <a href="#" className="abc" key={l}>{l}</a>
        ))}
        <button className="install">
          <i className="fa-solid fa-circle-arrow-down"></i> Install App
        </button>
        <button className="signup">Sign up</button>
        <button className="login">Log in</button>
      </div>
    </div>
  );
}
