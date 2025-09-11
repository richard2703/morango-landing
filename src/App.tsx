import MainLayout from "./layouts/MainLayout";
import './App.css';
import Franquicias from "./pages/Franquicias";
import Eventos from "./pages/Eventos";
import Home from "./pages/Inicio";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franquicias" element={<Franquicias />} />
          <Route path="/Eventos" element={<Eventos />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;