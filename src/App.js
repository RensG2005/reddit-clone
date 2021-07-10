import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Navbar from "./pages/header/Navbar";
import MainPage from "./pages/mainpages";

function App() {
  const [mobile, setMobile] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar setMobile={setMobile} mobile={mobile} />
        {!mobile && <MainPage />}
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
