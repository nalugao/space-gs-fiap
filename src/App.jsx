import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./components/Layout"
import Home from "./pages/Home";
import Referencias from "./pages/Referencias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />   
          <Route path="/referencias" element={<Referencias />} />     
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;