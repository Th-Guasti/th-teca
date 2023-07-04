import Inicio from "./paginas/Inicio";
import Livros from "./paginas/Livros";
import Descricao from "./paginas/Descricao";
import Error from "./paginas/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/livro/:id" element={<Descricao />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
