import CartWidget from "./CartWidget";
import gameZone from "../img/GameZone.webp";
import { Link } from "react-router-dom";
function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
   <Link to = "/"> <img className="img-logo" src={gameZone} alt=""/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <Link to ="/" className="nav-link" href="#">Inicio</Link>
        <Link to = "/category/2" className="nav-link" href="#">Mouse's</Link>
        <Link to = "/category/7" className="nav-link" href="#">Mouse's Pad</Link>
        <Link to = "/category/3" className="nav-link" href="#">Teclados</Link>
       <Link to = "/category/4" className="nav-link" href="#">Auriculares</Link>
       <Link to = "/category/5" className="nav-link" href="#">Microfonos</Link>
       <Link to = "/category/1" className="nav-link" href="#">Monitores</Link>
       <Link to = "/category/6" className="nav-link" href="#">Gabinetes</Link>
      
      </div>
    </div>
    <Link to = "/cart"><CartWidget/></Link>
  </div>
</nav>
)}

export default NavBar;

