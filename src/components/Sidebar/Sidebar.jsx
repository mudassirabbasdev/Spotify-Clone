import { libraryBoxes, legalLinks } from "../../data/library";
import { circleIcon } from "../../lib/classes";

export default function Sidebar() {
  return (
    <div className="mr-2 flex rounded-2xl bg-[red]">
      <div className="mt-2 box-content h-full w-[340px] rounded-2xl px-3 py-2">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <h1 className="my-[0.67em] text-[1rem] font-bold text-white">Your Library</h1>
          <button
            type="button"
            className="w-max rounded-2xl border-2 border-[#767676] bg-[#1f1f1f] px-4 py-2 text-[0.875rem] font-bold text-white"
          >
            <i className={`fa-solid fa-plus ${circleIcon}`}></i> Create
          </button>
        </div>
        <div className="h-[150px] overflow-auto">
          {libraryBoxes.map((b) => (
            <div className="mt-3 mb-6 rounded-lg bg-[#1f1f1f] px-4 py-3 text-white" key={b.title}>
              <p className="my-[1em] text-[1rem] font-semibold">{b.title}</p>
              <p className="my-[1em] text-[0.85rem] opacity-90">{b.text}</p>
              <button className="mt-2 box-content h-8 w-fit rounded-full bg-white px-4 py-1 text-[13.333px] font-bold text-black">
                {b.cta}
              </button>
            </div>
          ))}
        </div>
        <div className="text-start text-white">
          <div className="mt-4 flex flex-wrap gap-[1.2rem] text-[0.75rem]">
            {legalLinks.map((l) => (
              <div key={l}><span>{l}</span></div>
            ))}
          </div>
          <a href="#" className="text-[#0000ee] underline">cookies</a>
        </div>
      </div>
    </div>
  );
}
