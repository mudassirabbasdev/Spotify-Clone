import { footerColumns, socials } from "../../data/footer";

export default function Footer() {
  return (
    <>
      <div className="flex h-[300px] items-center justify-center">
        <div className="h-[30%] w-full border-t border-white opacity-10"></div>
      </div>
      <div>
        <nav className="flex flex-wrap items-start justify-between px-5 py-10">
          <div className="mt-8 flex">
            <div className="flex gap-[60px]">
              {footerColumns.map((col) => (
                <ul className="m-0 flex list-none flex-col p-0" key={col.title}>
                  <p className="mt-[1em] mb-2.5 font-bold text-white">{col.title}</p>
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="my-[5px] block text-[0.875rem] text-[#b3b3b3] no-underline hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            {socials.map((s) => (
              <i key={s} className={`fa-brands ${s} rounded-full bg-[#222] p-2.5 text-[1rem] text-white`}></i>
            ))}
          </div>
        </nav>
        <p className="my-[1em]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit debitis harum officiis
          officia quasi non illum, nisi dolore quod, sapiente id corporis in, inventore nobis fuga
          consequuntur ut? Exercitationem, dolorum?
        </p>
      </div>
    </>
  );
}
