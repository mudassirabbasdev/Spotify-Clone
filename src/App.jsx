import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/HomePage";

export default function App() {
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Escape closes the mobile library drawer.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="flex h-dvh flex-col bg-black">
      <Navbar query={query} onQuery={setQuery} onToggleSidebar={() => setSidebarOpen((o) => !o)} />

      <div className="flex min-h-0 flex-1 gap-2 px-2 pt-[72px] pb-2">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main id="main" className="min-w-0 flex-1 overflow-y-auto rounded-xl bg-surface">
          <HomePage query={query} onClearQuery={() => setQuery("")} />
        </main>
      </div>
    </div>
  );
}
