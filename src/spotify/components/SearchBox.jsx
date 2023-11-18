import { IconSearch } from "../../icons/Icons";

export const SearchBox = () => {
  return (
    <div className="flex gap-1 bg-zinc-900/50 py-2 px-5 rounded-3xl items-center h-12 font-extraligh w-[300px]">
      <span className="text-xl">
        <IconSearch />
      </span>
      <input
        type="text"
        placeholder="What do you want to listen to?"
        className="  text-xs bg-transparent focus:outline-none placeholder:font-light w-full"
      />
    </div>
  );
};
