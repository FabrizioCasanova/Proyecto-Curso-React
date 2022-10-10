import { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import { cartContext } from './CartContext';
import Badge from 'react-bootstrap/Badge';

function CartWidget(){

    const { totalCantInCart } = useContext(cartContext)
   
    return(
        <>
        <GrCart/> {(totalCantInCart() !== 0) && <Badge bg="secondary">{totalCantInCart()}</Badge>} 
        </>
    )
} 

export default CartWidget;
