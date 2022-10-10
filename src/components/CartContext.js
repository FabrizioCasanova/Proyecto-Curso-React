import {createContext, useState} from 'react'

export const cartContext = createContext();

function ProviderOfCartContext({children}){

    const [cartList, setCartList] = useState ([])

    function addItem(product, count){
       if (inCart(product.id)) {
        const itemIndex = cartList.findIndex(element => element.item.id === product.id)
        cartList[itemIndex].count = cartList[itemIndex].count + count
       }else{
        setCartList([...cartList, {item: product, count}])
       }
    }
    function inCart(id) {
        return cartList.some(element => element.item.id === id)
    }
     const totalCantInCart = () => {
        return cartList.reduce((acumulador, itemAddCart) => acumulador + itemAddCart.count, 0)
      }
      const totalPriceInCart = () => {
        return cartList.reduce((acumulador, itemAddCart) => acumulador + (itemAddCart.item.price * itemAddCart.count), 0)
      }

    function deleteProduct(id){
        const cartListUpdate = cartList.filter (ele => ele.item.id !== id)
        setCartList(cartListUpdate)
    }   

    function clear(){
        setCartList([])
    }

    return (

        <cartContext.Provider value={{cartList, addItem, inCart, totalCantInCart, totalPriceInCart, deleteProduct, clear}}>
            {children}
        </cartContext.Provider>    
    )
}

export default ProviderOfCartContext;