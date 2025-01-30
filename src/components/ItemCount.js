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
        <div  className='itemCountStyle'>
         <Button onClick={handleAmount2} type="submit">-</Button> {amount}
         <Button onClick={handleAmount1} type="submit">+</Button>
         <Button id="btn-Add-Cart" onClick={() => addProduct(amount)} type="submit">Agregar al carrito</Button>
         </div>
    )
}

export default ItemCount;