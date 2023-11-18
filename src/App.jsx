import { PlayerInfo } from "./spotify/components/PlayerInfo";
import { Player } from "./spotify/components/Player";
import { Nav } from "./spotify/layouts/Nav";
import { Home } from "./spotify/pages/Home";
import { useShowInfo } from "./spotify/hooks/useShowInfo";

export const App = () => {
  const { isShowInfo } = useShowInfo();
  return (
    <section id="home" className="bg-zinc-950 p-2 gap-2">
      <nav className="">
        <Nav />
      </nav>
      <main className="bg-zinc-900 rounded-lg overflow-y-auto ">
        <Home />
      </main>
      {isShowInfo && (
        <aside className="bg-zinc-900 rounded-lg ">
          <PlayerInfo />
        </aside>
      )}

      <footer className="px-3">
        <Player />
      </footer>
    </section>
  );
};
