import { useContext } from 'react';
import { ViewportContext } from '../context/viewportContext';

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  return { width, height };
};
