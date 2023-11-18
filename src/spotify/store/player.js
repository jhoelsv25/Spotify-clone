import { create } from "zustand";

export const usePlayerStore = create((set, get) => {
  return {
    isPlaying: false,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setPlayer: (player) => set({ player }),
  };
});
