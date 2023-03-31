import { useEffect } from "react";
import { useDebounce } from "./index";

const useScrollStop = (handleScroll, timeout) => {
  const debouncedHandleScroll = useDebounce(handleScroll, timeout ?? 500);
  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);
};

export default useScrollStop;
