import React from 'react';
import Footer from './sectioning/footer/footer';
import Header from './sectioning/header/header';
import Main from './sectioning/main/main';
import { useViewport } from './hooks/useViewport';

const App = (): JSX.Element => {
  const { width } = useViewport();
  const isMobileView = width && width < 769;

  return (
    <>
      <Header isMobileView={isMobileView} />
      <Main />
      <Footer />
    </>
  );
};

export default App;
