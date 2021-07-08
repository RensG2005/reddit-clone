import Navbar from './pages/header/Navbar'
import {DataProvider} from './GlobalState'
import {BrowserRouter} from "react-router-dom"
import MainPage from './pages/mainpages/index'

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
