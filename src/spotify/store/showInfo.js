import { create } from "zustand";

export const useShowInfoStore = create((set) => {
  return {
    isShowInfo: false,
    setIsShowInfo: (isShowInfo) => set({ isShowInfo }),
  };
});
