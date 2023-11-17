import { CardSong } from "../components/cards/CardSong";
import { ListSong } from "../components/cards/ListSong";
import { Header } from "../layouts/Header";
import { Greeting } from "../utils/Greeting";

export const Home = () => {
  document.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header?.classList.toggle("bg-zinc-700", window.scrollY > 0);
    header?.classList.toggle("bg-transparent", window.scrollY === 0);
    console.log(header);
  });
  return (
    <section className="flex flex-col h-full relative bg-transparent bg-gradient-to-t from-zinc-900 to-zinc-700 px-5 ">
      <header id="header" className="h-16 z-50 sticky top-0 bg-transparent">
        <Header />
      </header>
      <article className="flex-1  ">
        <header className="py-5">
          <Greeting />
        </header>
        <article className="flex flex-wrap">
          <ListSong />
        </article>
      </article>
    </section>
  );
};
