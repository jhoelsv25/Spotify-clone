import { usePlayerStore } from "../store/player";

export const usePlayer = () => {
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const setIsPlaying = usePlayerStore((state) => state.setIsPlaying);
  return { isPlaying, setIsPlaying };
};
