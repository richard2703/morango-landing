import MainLayout from "./layouts/MainLayout";
import './App.css';
import Franquicias from "./pages/Franquicias";
import Home from "./pages/Inicio";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franquicias" element={<Franquicias />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;