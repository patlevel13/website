import "./App.css";
import { Home } from "./screens/Home";
import { Ressources } from "./screens/Ressources";
import { Routes, Route, NavLink } from "react-router-dom";
import { Contacts } from "./screens/Contacts";

function App() {
  return (
    <div className="container mt-10">
      <header className="mb-5">
        <nav className="flex justify-between">
          <NavLink to="/">Accueil</NavLink>
          <br />
          <NavLink to="/ressources">Ressources</NavLink>
          <br />
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <footer>
        
      </footer>
    </div>
  );
}
/*video youtube à 40mn*/
export default App;
