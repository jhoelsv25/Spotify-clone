import { useFavoriteStore } from "../store/favorite";

export const useFavorite = () => {
  const isFavorite = useFavoriteStore((state) => state.isFavorite);
  const setIsFavorite = useFavoriteStore((state) => state.setIsFavorite);

  return { setIsFavorite, isFavorite };
};
