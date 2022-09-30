import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import CartItem from "./CartItem";
import Button from "react-bootstrap/esm/Button";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/configFirebase"
function Cart () {

  const {cartList, clear, totalPriceInCart } = useContext(cartContext);

  async function createOrder() {
    let arrayItemsForDB = cartList.map(element => ({
      id: element.item.id,
      price: element.item.price,
      title: element.item.title,
      quantity: element.count
    }))
    let order = {
      buyer: {
        name: "Fabrizio Julian Casanova",
        email: "fabri.casanova@outlook.com", 
        phone: "11346786" 
      },
      date: serverTimestamp(),
      items: arrayItemsForDB,
      total: totalPriceInCart()
    }
    const newDocumentRef = doc(collection(db, "orders"))
    await setDoc(newDocumentRef, order);

    cartList.forEach(async(element) => {
      const referenceOfItem = doc(db, "Products", element.item.id)
      await updateDoc(referenceOfItem, {
        stock: increment(-element.count)
      })
    })
    clear()
    alert("Tu orden fue creada. ID:" + newDocumentRef.id)
  }

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
    <Button className="clearAllProducts" onClick={clear}> Borrar Todos Los Productos</Button>
    <p className="totalPrice"> Total a pagar: ${totalPriceInCart()}</p>
    <Button className="createOrder" onClick={createOrder}>Crear Nueva Orden De Compra</Button> 
    </div>
    }
    </>
);
}

export default Cart;
