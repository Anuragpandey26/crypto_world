import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoDetail from './pages/CryptoDetail';
import CryptoHome from "./pages/CryptoHome";
import Navbar from "./component/navbar"
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <CryptoHome />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App