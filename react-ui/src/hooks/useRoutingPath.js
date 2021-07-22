import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useRoutingPath = () => {
  const [routingPath, setRoutingPath] = useState();
  const path = useLocation();

  useEffect(() => {
    const re = /^\/([^/]*).*$/;  // capture the string after the first slash in the URL
    setRoutingPath(path.pathname.match(re)[1]);
  }, [path.pathname]);

  return routingPath;
}

export default useRoutingPath;