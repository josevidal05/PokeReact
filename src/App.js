import PokeLista from "./components/pokelista";
import Pokemon from "./components/pokemon";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/" element={<PokeLista />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
