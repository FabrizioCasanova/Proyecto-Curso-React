import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

function ProviderOfCartContext({ children }) {
    
    // Intentamos recuperar el carrito desde localStorage al iniciar
    const storedCart = localStorage.getItem("cart");
    const initialCart = storedCart ? JSON.parse(storedCart) : [];

    const [cartList, setCartList] = useState(initialCart);

    // Guardar carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartList));
    }, [cartList]);

    function addItem(product, count) {
        if (inCart(product.id)) {
            const newCart = cartList.map(element =>
                element.item.id === product.id
                    ? { ...element, count: element.count + count }
                    : element
            );
            setCartList(newCart);
        } else {
            setCartList([...cartList, { item: product, count }]);
        }
    }

    function inCart(id) {
        return cartList.some(element => element.item.id === id);
    }

    function totalCantInCart() {
        return cartList.reduce((acumulador, itemAddCart) => acumulador + itemAddCart.count, 0);
    }

    function totalPriceInCart() {
        return cartList.reduce((acumulador, itemAddCart) => acumulador + (itemAddCart.item.price * itemAddCart.count), 0);
    }

    function deleteProduct(id) {
        const cartListUpdate = cartList.filter(ele => ele.item.id !== id);
        setCartList(cartListUpdate);
    }

    function clear() {
        setCartList([]);
        localStorage.removeItem("cart");
    }

    return (
        <cartContext.Provider value={{ cartList, addItem, inCart, totalCantInCart, totalPriceInCart, deleteProduct, clear }}>
            {children}
        </cartContext.Provider>
    );
}

export default ProviderOfCartContext;
