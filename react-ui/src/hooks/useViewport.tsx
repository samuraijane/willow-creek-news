import { useContext } from 'react';
import { ViewportContext } from '../context/viewportContext';

export const useViewport = () => {
  const { height, screenSize, width } = useContext(ViewportContext);
  return { height, screenSize, width };
};
