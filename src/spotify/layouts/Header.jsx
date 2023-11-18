import { useLocation } from "react-router-dom";
import {
  IconBack,
  IconNext,
  IconNotification,
  IconUpload,
  IconDownload,
  IconUser,
} from "../../icons/Icons";
import { SearchBox } from "../components/SearchBox";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <section className="h-full flex justify-between">
      <div className="flex gap-5 items-center h-full">
        <div className="flex gap-2">
          <span className="w-8 h-8 rounded-full bg-zinc-900/95 flex items-center justify-center cursor-pointer">
            <IconBack />
          </span>
          <span className="w-8 h-8 rounded-full bg-zinc-900/95 flex items-center justify-center cursor-pointer">
            <IconNext />
          </span>
        </div>
        {pathname === "/search" && <SearchBox />}
      </div>
      <div className="flex gap-3 items-center  h-full">
        <button className="rounded-2xl bg-zinc-100/95 px-5 py-1.5 text-sm text-black inline-flex items-center gap-2 hover:opacity-90">
          <IconUpload /> Upload local
        </button>
        <button className="rounded-2xl bg-zinc-900/95 px-5 py-1.5 text-sm inline-flex items-center gap-2 hover:opacity-90">
          <IconDownload />
          Link Youtube
        </button>
        <span className="w-8 h-8 rounded-full bg-zinc-900/95  text-xl flex items-center justify-center">
          <IconNotification />
        </span>
        <span className="w-8 h-8 rounded-full bg-zinc-900/95 text-xl flex items-center justify-center">
          <IconUser />
        </span>
      </div>
    </section>
  );
};
