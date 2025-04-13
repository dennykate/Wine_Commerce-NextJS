"use client";

import { useEffect, useState } from "react";

const useGetWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const processWindowWidth = () => {
      const width = window.innerWidth;

      setWindowWidth(width);
    };

    processWindowWidth();

    window.addEventListener("resize", processWindowWidth);

    return () => {
      window.removeEventListener("resize", processWindowWidth);
    };
  }, []);

  return windowWidth;
};

export default useGetWindowWidth;
