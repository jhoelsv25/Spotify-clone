import { IconXmark } from "../../icons/Icons";
import { useShowInfo } from "../hooks/useShowInfo";

export const PlayerInfo = () => {
  const { isShowInfo, setIsShowInfo } = useShowInfo();

  return (
    <div className="flex gap-3 flex-col flex-1 py-4 overflow-y-auto overflow-x-hidden">
      <span className="flex  justify-between px-4 pt-2">
        <h1 className="text-lg font-medium">yo te espera</h1>
        <button onClick={() => setIsShowInfo(!isShowInfo)} className="text-xl ">
          <IconXmark />
        </button>
      </span>
      <picture className="px-4 w-full h-56 aspect-square rounded-lg">
        <img src="" alt="" className="object-cover h-full w-full" />
      </picture>
    </div>
  );
};
