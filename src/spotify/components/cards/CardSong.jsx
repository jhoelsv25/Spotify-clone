import { IconHeart, IconUp } from "../../../icons/Icons";

export const CardSong = () => {
  return (
    <div className="flex gap-5">
      <picture className="relative h-16 w-14 bg-zinc-800 group rounded-md">
        <img
          src="https://picsum.photos/200/300"
          alt="song"
          className="rounded-md h-full w-full"
        />
        <button className="absolute opacity-0 top-1 right-1  bg-black/50 w-6 h-6 rounded-full transition-all translate-y-0 group-hover:translate-y-1 duration-300 group-hover:opacity-100 flex items-center justify-center text-3xl">
          <IconUp />
        </button>
      </picture>
      <div className="flex flex-col justify-center truncate ">
        <h4 className="text-sm">Ttile</h4>
        <span className="text-xs text-gray-400">textz</span>
      </div>
      <button className="text-gray-500 text-2xl">
        <IconHeart />
      </button>
    </div>
  );
};
