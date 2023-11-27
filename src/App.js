import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Logement from "./pages/Logement"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Logements/:id" element={<Logement/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
