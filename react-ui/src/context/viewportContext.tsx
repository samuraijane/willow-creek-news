import { createContext, useEffect, useState } from 'react';

interface ViewContextProps {
  children: JSX.Element | JSX.Element[]
}

export const ViewportContext = createContext<any>({});

export const ViewportProvider = ({ children }: ViewContextProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // TODO add debounce
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};
