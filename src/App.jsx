import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { LanguageProvider } from "./components/context/LanguageContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Referencias from "./pages/Referencias";
import Contato from "./pages/Contato";

function Solucao() {
  return (
    <main className="page-placeholder">
      <h1>Solução</h1>
      <p>Página da solução do problema em construção.</p>
    </main>
  );
}

function Financeiro() {
  return (
    <main className="page-placeholder">
      <h1>Financeiro</h1>
      <p>Página financeira do projeto em construção.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/contato" element={<Contato />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;