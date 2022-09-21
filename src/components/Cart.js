import { Link } from "react-router-dom";

function Cart () {
return(
    <>
    <p className= "parrafoCart">Carrito Vacio</p>
   <Link to = "/"><p className="parrafoGoInicio">Volver al Inicio</p></Link>
    </>
)
}

export default Cart;
