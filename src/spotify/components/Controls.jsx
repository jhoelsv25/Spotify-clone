import { IconPause, IconPlay, IconVolume } from "../../icons/Icons";
import { usePlayer } from "../hooks/usePlayer";
import { CardSong } from "./cards/CardSong";

export const Controls = () => {
  const { isPlaying, setIsPlaying } = usePlayer();
  return (
    <>
      <CardSong />
      <div className="flex flex-col items-center justify-center gap-3">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white text-black text-xl rounded-full p-2 w-10 h-10 flex items-center justify-center "
        >
          {isPlaying ? <IconPlay /> : <IconPause />}
        </button>
        <div className="flex gap-3 items-center">
          <small className="text-gray-400 font-extralightlight">0:00</small>
          <input
            className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-1 w-60 cursor-pointer"
            type="range"
            min="1"
            max="100"
            step="1"
          />
          <small className="text-gray-400 font-extralightlight">3:50</small>
        </div>
      </div>
      <div className="flex flex-row gap-2 h-full items-center  justify-center">
        <button className="pb-1.5 opacity-75 hover:opacity-100 text-xl ">
          <IconVolume />
        </button>

        <input
          className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-1 w-32 cursor-pointer"
          type="range"
          min="1"
          max="100"
          step="1"
        />
      </div>
    </>
  );
};
