import { useEffect, useRef, useCallback } from "react";

const useDebounce = (func, delay) => {
  const timeoutRef = useRef();

  const debouncedFunc = useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return debouncedFunc;
};

export default useDebounce;
