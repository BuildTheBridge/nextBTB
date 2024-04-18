import { useRef } from "react";

const useMoveScroll = () => {
  const element = useRef<HTMLElement>(null);
  const onMoveToElement = () => {
    if (element.current) {
      element.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { element, onMoveToElement };
};

export default useMoveScroll;
