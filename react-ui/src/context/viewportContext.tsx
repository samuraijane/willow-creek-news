import { createContext, useEffect, useState } from 'react';
import { ScreenSize } from '../types/enum';

interface ViewContextProps {
  children: JSX.Element | JSX.Element[]
}

export const ViewportContext = createContext<any>({});

const getScreenSize = (width: number) => {
  if (width >= 360 && width < 576) return ScreenSize.X_SMALL;
  if (width >= 576 && width < 768) return ScreenSize.SMALL;
  if (width >= 768 && width < 992) return ScreenSize.INTERMEDIATE;
  if (width >= 992 && width < 1200) return ScreenSize.LARGE;
  if (width >= 1200) return ScreenSize.X_LARGE;
  return ScreenSize.X_SMALL;
};

export const ViewportProvider = ({ children }: ViewContextProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [screenSize, setScreenSize] = useState(getScreenSize(window.innerWidth));

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setScreenSize(getScreenSize(window.innerWidth))
  };

  useEffect(() => {
    // TODO add debounce
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <ViewportContext.Provider value={{ height, screenSize, width }}>
      {children}
    </ViewportContext.Provider>
  );
};
