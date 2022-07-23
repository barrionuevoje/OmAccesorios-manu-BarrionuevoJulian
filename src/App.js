import Cabecera from "./componets/Cabecera";
import Busqueda from "./componets/Busqueda";
import "bootstrap/dist/css/bootstrap.css";
import{Link, BrowserRouter, Route, Routes} from "react-router-dom"; 
import Biblioteca from "./componets/Biblioteca";
import Listas from "./componets/Listas";
import TopRanked from "./componets/TopRanked";

function App() {


  return (
    <BrowserRouter>
      
        
        <Cabecera titulo="Om Accesorios"/>
          <nav>
            <ul className="nav bg-dark text-center">
              <li className='nav-item'><Link className="nav-link" to="/biblioteca">Biblioteca</Link></li>
              <li className='nav-item'><Link className="nav-link" to="/listas" >Listas</Link></li>
              <li className='nav-item'><Link className="nav-link" to="/topranked">Top Ranked</Link></li>
            </ul>
          </nav>
        <Busqueda />
      <main className="container">
        <Routes>
          <Route path="/biblioteca" element={<Biblioteca />}/>
          <Route path="/listas" element={<Listas />}/>
          <Route path="/topranked" element={<TopRanked />} />
        </Routes>  
      </main> 
      
    </BrowserRouter>
  );
}

export default App;
