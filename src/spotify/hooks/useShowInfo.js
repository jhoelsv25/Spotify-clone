import { useShowInfoStore } from "../store/showInfo";

export const useShowInfo = () => {
  const isShowInfo = useShowInfoStore((state) => state.isShowInfo);
  const setIsShowInfo = useShowInfoStore((state) => state.setIsShowInfo);
  return { isShowInfo, setIsShowInfo };
};
