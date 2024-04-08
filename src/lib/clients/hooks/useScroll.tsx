import { useEffect, useState } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setLastScroll(scroll);
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return { scroll, lastScroll };
}
