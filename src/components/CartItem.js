import { useContext } from "react";
import { cartContext } from "./CartContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CartItem({ produc }){

    const { deleteProduct } = useContext(cartContext)

    return(
        <>
<section className='seccionCardProducts'>
<section className='cardsProducts'>
<Card className="CardItemContainer" >
    <Card.Img variant="top" src={produc.item.image} />
      <Card.Body className="cardBodyItemContainer">
        <Card.Title className="cardTitleItemContainer">{produc.item.title}</Card.Title>
        <Card.Text className="cardDescriptionItemContainer"> Cantidad: {produc.count}</Card.Text>
        <Card.Text className="cardDescriptionItemContainer"> Precio: ${produc.item.price}</Card.Text>
        <Button id="deleteProductCart" onClick={() => deleteProduct(produc.item.id)}> Borrar producto del carrito</Button>
      </Card.Body>
    </Card>
</section>
</section>
 </>
    )
}   

export default CartItem;