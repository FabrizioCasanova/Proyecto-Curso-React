import CartWidget from "./CartWidget";
import gameZone from "../img/GameZone.webp";
function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <img className="img-logo" src={gameZone} alt=""/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="#">Inicio</a>
        <a className="nav-link" href="#">Productos</a>
        <a className="nav-link" href="#">Contacto</a>
      </div>
    </div>
    <CartWidget/>
  </div>
</nav>
)}

export default NavBar;

