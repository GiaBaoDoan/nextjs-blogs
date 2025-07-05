// hooks/useScrollDirection.ts
import { useEffect, useState } from "react";

export function useHeaderHidden(threshold = 10) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const curY = window.scrollY;
      if (Math.abs(curY - lastY) < 5) return;
      if (curY > lastY && curY > threshold) setHidden(true); // cuộn xuống → ẩn
      else setHidden(false); // cuộn lên → hiện
      lastY = curY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return hidden;
}
