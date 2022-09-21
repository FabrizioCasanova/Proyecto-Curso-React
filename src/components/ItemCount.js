import { useState } from "react";
import Button from 'react-bootstrap/Button';
function ItemCount({ stock, initial, addProduct }){

    const [amount, setAmount] = useState(initial) 

   function handleAmount1(){
        if(amount < stock ){
            setAmount(amount+1);    
        }   
   }

   function handleAmount2(){
    if (amount > initial) {
        setAmount(amount-1);    
    }  
   }

    return (
        <>
         <Button onClick={handleAmount1} type="submit">+</Button> {amount}
         <Button onClick={handleAmount2} type="submit">-</Button>
         <Button onClick={() => addProduct(amount)} type="submit">Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;