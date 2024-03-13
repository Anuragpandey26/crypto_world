import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import CryptoDetail from './pages/CryptoDetail';
import CryptoHome from "./pages/CryptoHome";
import Navbar from "./component/navbar"
function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </>
  )
}

export default App