import React, { useEffect, useState, createContext, ReactNode } from "react";

interface WindowContextProps {
  windowSize: number;
  setWindowSize: React.Dispatch<React.SetStateAction<number>>;
}

export const WindowSize = createContext<WindowContextProps | null>(null);

interface WindowContextPropsProviderProps {
  children: ReactNode;
}

function WindowContext({ children }: WindowContextPropsProviderProps) {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    function setWindowWidth() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", setWindowWidth);

    //cleanUp function
    return () => {
      window.removeEventListener("resize", setWindowWidth);
    };
  }, []);

  const WindowContextValue: WindowContextProps = {
    windowSize,
    setWindowSize,
  };

  return (
    <WindowSize.Provider value={WindowContextValue}>
      {children}
    </WindowSize.Provider>
  );
}

export default WindowContext;
