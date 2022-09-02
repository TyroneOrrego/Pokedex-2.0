import React from "react";

import { Routes } from "./routes";
import loadingApp from "./assets/gif/loading.gif";
import { Container, Image } from "./App.styled";

const { REACT_APP_MAX_LOADING = 2, REACT_APP_MIN_LOADING = 1 } = process.env;

function App() {
  const [appLoading, setAppLoading] = React.useState(true);

  React.useEffect(() => {
    const MS =
      Math.floor(
        Math.random() *
          (Number(REACT_APP_MAX_LOADING) - Number(REACT_APP_MIN_LOADING) + 1)
      ) + Number(REACT_APP_MIN_LOADING);
    setTimeout(() => {
      setAppLoading(false);
    }, MS);
  }, []);

  return (
    <>
      {appLoading ? (
        <Container key="app-container">
          <Image src={loadingApp} alt="loading the app" />
        </Container>
      ) : (
        <Routes key="app-routes" />
      )}
    </>
  );
}

export default App;
