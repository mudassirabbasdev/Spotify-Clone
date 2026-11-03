import { footerColumns, socials } from "../data";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="line"></div>
      </div>
      <div>
        <nav className="nav-footer">
          <div className="div1">
            <div className="sc-xy">
              {footerColumns.map((col) => (
                <div className="xy-ab" key={col.title}>
                  <ul className="e-103">
                    <p>{col.title}</p>
                    {col.links.map((l) => (
                      <li key={l}><a href="#">{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="sc-yz"></div>
          </div>
          <div className="div2">
            {socials.map((s) => (
              <div className="gbrRSO" key={s}>
                <i className={`fa-brands ${s}`}></i>
              </div>
            ))}
          </div>
        </nav>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis harum officiis
          officia quasi non illum, nisi dolore quod, sapiente id corporis in, inventore nobis fuga
          consequuntur ut? Exercitationem, dolorum?
        </p>
      </div>
    </>
  );
}
