import CartWidget from "./CartWidget";
import gameZone from "../img/GameZone.webp";
import { Link } from "react-router-dom";

const navbarNavAltMarkup = document.getElementById('navbarNavAltMarkup')

const closeNavBar = () => {

navbarNavAltMarkup.classList.add('show')

}


function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
   <Link to = "/"> <img className="img-logo" src={gameZone} alt=""/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse show navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
       <Link to ="/" onClick={closeNavBar} className="nav-link" >Inicio</Link>
        <Link to = "/category/2" onClick={closeNavBar} className="nav-link" >Mouse's</Link>
        <Link to = "/category/7" onClick={closeNavBar} className="nav-link" >Mouse's Pad</Link>
        <Link to = "/category/3" onClick={closeNavBar} className="nav-link" >Teclados</Link>
       <Link to = "/category/4"  onClick={closeNavBar} className="nav-link" >Auriculares</Link>
       <Link to = "/category/5"  onClick={closeNavBar} className="nav-link" >Microfonos</Link>
       <Link to = "/category/1"  onClick={closeNavBar} className="nav-link" >Monitores</Link>
       <Link to = "/category/6"  onClick={closeNavBar} className="nav-link" >Gabinetes</Link>
      
      </div>
    </div>
    <Link style={{marginRight: "2%"}} to = "/cart"><CartWidget/></Link>
  </div>
</nav>
)}

export default NavBar;

