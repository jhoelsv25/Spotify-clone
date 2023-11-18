import { create } from "zustand";

export const useFavoriteStore = create((set) => {
  return {
    isFavorite: false,
    setIsFavorite: (isFavorite) => set({ isFavorite }),
  };
});
