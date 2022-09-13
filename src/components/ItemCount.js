import { useState } from "react";
import Button from 'react-bootstrap/Button';
function ItemCount(){
    function handleAdd(){
        if(amount == 1){
           alert(`Se ha agregado ${amount} producto a tu carrito`)
        } else if (amount > 1){
            alert(`Se  han agregado ${amount} productos a tu carrito`)
        } else{
            alert("Indique la cantidad de productos que quiere añadir al carrito")
        }
    }
    
   const [amount, setAmount] = useState(0);
   
   function handleAmount1(){
        if(amount < 5){
            setAmount(amount+1);    
        }   
   }

   function handleAmount2(){
    if (amount > 0) {
        setAmount(amount-1);    
    }  
   }

    return (
        <>
         <Button onClick={handleAmount1} type="submit">+</Button> {amount}
         <Button onClick={handleAmount2} type="submit">-</Button>
         <Button onClick={handleAdd} type="submit">Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;