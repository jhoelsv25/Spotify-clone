import { Link } from "react-router-dom";
import {
  IconHeart,
  IconHome,
  IconLibrary,
  IconSearch,
} from "../../icons/Icons";

export const Nav = () => {
  return (
    <section className="flex flex-col gap-2 h-full">
      <nav className="rounded-lg bg-zinc-900">
        <ul className="flex flex-col gap-5 p-4">
          <li className="flex items-center gap-3 text-base  text-gray-400 hover:text-gray-200 font-bold">
            <span className="text-3xl">
              <IconHome />
            </span>
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center gap-3 text-base  text-gray-400 hover:text-gray-200 font-bold">
            <span className="text-3xl">
              <IconSearch />
            </span>
            <Link to="/">Search</Link>
          </li>
        </ul>
      </nav>
      <nav className="rounded-lg bg-zinc-900 flex-1">
        <ul className="flex flex-col gap-5 p-4">
          <li className="flex items-center gap-3 text-base  text-gray-400 hover:text-gray-200 font-bold">
            <span className="text-3xl">
              <IconLibrary />
            </span>
            <Link to="/library">Your Library</Link>
          </li>
          <li className="flex items-center gap-3 text-base  text-gray-400 hover:text-gray-200 font-bold">
            <span className="text-3xl">
              <IconHeart />
            </span>
            <Link to="/favorite">Favorites</Link>
          </li>
        </ul>
        <hr className="mx-4" />
      </nav>
    </section>
  );
};
