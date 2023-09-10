import { useEffect } from "react";
import { Footer, Header, Main } from "./sectioning";
import { useViewport } from './hooks/useViewport';

const App = (): JSX.Element => {
  const { screenSize, width } = useViewport();
  const isMobileView = width && width < 992;
  (window as any).WCN = {isMobileView, screenSize}; // TODO determine if we really need this

  interface Response {
    message: string;
  }

  useEffect(() => {
    const doCheckIn = async () => {
      const data = await fetch('/check-in');
      const response: Response = await data.json();
      console.log(response.message);
    };
    doCheckIn();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
