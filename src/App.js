import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Logement from "./pages/Logement/Logement"
import Error from "./pages/Error/Error"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Logements/:id" element={<Logement/>} />
          <Route path="/Error" element={<Error/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
