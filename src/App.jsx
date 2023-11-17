import { PalyerInfo } from "./spotify/components/PalyerInfo";
import { Player } from "./spotify/components/Player";
import { Nav } from "./spotify/layouts/Nav";
import { Home } from "./spotify/pages/Home";

export const App = () => {
  return (
    <section id="home" className="bg-zinc-950 p-2 gap-2">
      <nav className="">
        <Nav />
      </nav>
      <main className="bg-zinc-900 rounded-lg overflow-y-auto ">
        <Home />
      </main>
      <aside className="bg-zinc-900 rounded-lg ">
        <PalyerInfo />
      </aside>
      <footer className="px-3">
        <Player />
      </footer>
    </section>
  );
};
