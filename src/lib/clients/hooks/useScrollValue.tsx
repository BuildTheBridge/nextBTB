import { useEffect, useState, useCallback, useMemo } from "react";

export default function useScrollValue() {
  const [scroll, setScroll] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = useCallback(() => {
    setLastScroll(scroll);
    setScroll(window.scrollY);
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollValue = useMemo(
    () => ({ scroll, lastScroll }),
    [scroll, lastScroll]
  );

  return scrollValue;
}
