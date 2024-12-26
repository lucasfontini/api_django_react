
import CadastraItem from './components/Form';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Item from "./components/Item";
import Home from './components/Home';

// Componentes para as páginas

function App() { 
  return (
    <>
    <div className='container'>
      
    <BrowserRouter>
    <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/items" element={<Item />} />
          <Route path="/cadastra" element={<CadastraItem />} />
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
 