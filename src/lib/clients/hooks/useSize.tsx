import { useEffect, useState, useCallback } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial call to set the initial window size

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize]);

  return windowSize;
};

export default useSize;
