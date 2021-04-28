import Navbar from './components/header/Navbar'
import {DataProvider} from './GlobalState'
import {BrowserRouter} from "react-router-dom"


import MainPage from './components/mainpages/index'

function App() {
  return (
  <DataProvider>
    <BrowserRouter>
          <Navbar />
          <MainPage />
        </BrowserRouter>
    </DataProvider>

  );
}

export default App;
