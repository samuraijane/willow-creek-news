import { Footer, Header, Main } from "./sectioning";
import { useViewport } from './hooks/useViewport';

const App = (): JSX.Element => {
  const { screenSize, width } = useViewport();
  const isMobileView = width && width < 992;
  (window as any).WCN = {isMobileView, screenSize}; // TODO determine if we really need this

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
