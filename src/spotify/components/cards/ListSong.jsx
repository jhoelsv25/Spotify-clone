import { Link } from "react-router-dom";
import { IconPause, IconPlay } from "../../../icons/Icons";
import { usePlayer } from "../../hooks/usePlayer";

export const ListSong = () => {
  const { isPlaying, setIsPlaying } = usePlayer();
  return (
    <>
      <div className="relative group ">
        <button className="absolute bottom-20 right-6 translate-y-4 transition-all duration-500 rounded-full text-black text-xl p-3 bg-green-500 hover:bg-green-400 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          {isPlaying ? <IconPlay /> : <IconPause />}
        </button>
        <Link
          to="/playlist/1"
          className="transition-all duration-300  flex  flex-col bg-zinc-500/30 p-2 w-44  overflow-hidden  gap-2 pb-3 shadow-lg hover:shadow-xl rounded-md hover:bg-zinc-800 "
        >
          <picture className=" rounded-lg p-2">
            <img
              src="https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </picture>
          <footer className="px-2">
            <h4 className="text-sm">titulo</h4>
            <span className="text-xs text-gray-400 truncate">artitas</span>
          </footer>
        </Link>
      </div>
      <div className="relative group ">
        <button className="absolute bottom-20 right-6 translate-y-4 transition-all duration-500 rounded-full text-black text-xl p-3 bg-green-500 hover:bg-green-400 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          {isPlaying ? <IconPlay /> : <IconPause />}
        </button>
        <Link className="transition-all duration-300  flex  flex-col bg-zinc-500/30 p-2 w-44  overflow-hidden  gap-2 pb-3 shadow-lg hover:shadow-xl rounded-md hover:bg-zinc-800 ">
          <picture className=" rounded-lg p-2">
            <img
              src="https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </picture>
          <footer className="px-2">
            <h4 className="text-sm">titulo</h4>
            <span className="text-xs text-gray-400 truncate">artitas</span>
          </footer>
        </Link>
      </div>
      <div className="relative group ">
        <button className="absolute bottom-20 right-6 translate-y-4 transition-all duration-500 rounded-full text-black text-xl p-3 bg-green-500 hover:bg-green-400 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          {isPlaying ? <IconPlay /> : <IconPause />}
        </button>
        <Link className="transition-all duration-300  flex  flex-col bg-zinc-500/30 p-2 w-44  overflow-hidden  gap-2 pb-3 shadow-lg hover:shadow-xl rounded-md hover:bg-zinc-800 ">
          <picture className=" rounded-lg p-2">
            <img
              src="https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353"
              alt=""
              className="h-full w-full object-cover rounded-md"
            />
          </picture>
          <footer className="px-2">
            <h4 className="text-sm">titulo</h4>
            <span className="text-xs text-gray-400 truncate">artitas</span>
          </footer>
        </Link>
      </div>
    </>
  );
};
