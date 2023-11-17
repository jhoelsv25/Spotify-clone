import {
  IconBack,
  IconNext,
  IconNotification,
  IconUser,
} from "../../icons/Icons";

export const Header = () => {
  return (
    <section className="h-full flex justify-between">
      <div className="flex gap-5 items-center h-full">
        <span className="w-8 h-8 rounded-full bg-zinc-900/95 flex items-center justify-center cursor-pointer">
          <IconBack />
        </span>
        <span className="w-8 h-8 rounded-full bg-zinc-900/95 flex items-center justify-center cursor-pointer">
          <IconNext />
        </span>
      </div>
      <div className="flex gap-3 items-center  h-full">
        <button className="rounded-2xl bg-zinc-900/95 px-5 py-1.5 text-sm">
          Copy link youtube
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
