import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import CartItem from "./CartItem";
import Button from "react-bootstrap/esm/Button";

function Cart () {

   const {cartList, clear, totalPriceInCart } = useContext(cartContext);

return(
    <>
    {cartList.length === 0 ?
    <div className="elementsCartEmpty">
    <p className= "parrafoCart">Carrito Vacio</p>
   <Link to = "/"><Button className="buttonGoInicio">Volver al Inicio</Button></Link>
   </div>
   :
   <div>
     <Link to = "/"><Button className="buttonGoInicio2">Volver al Inicio</Button></Link>
    {cartList.map(element => <CartItem key={element.item.id} produc={element}></CartItem>)}
    <Button className="clearAllProducts" onClick={clear}> Borrar todos los productos</Button>
    <p className="totalPrice"> Total a pagar: ${totalPriceInCart()}</p>
    </div>
    }
    </>
);
}

export default Cart;
