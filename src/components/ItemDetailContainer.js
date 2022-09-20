import React, { useEffect, useState } from "react"
import Loader from "../components/LoaderItem"
import ItemDetail from "./ItemDetail"
import fetchPromise from "../utils/fetchPromise"
import productsList from "../utils/products"
import { useParams } from "react-router-dom"

function ItemDetailContainer () {

    const [productItem, setProductItem] = useState({})
    const [loadingPage, setLoadingPage] = useState(false)
    const { id } = useParams();
     useEffect(() => {
        setLoadingPage(true)
        fetchPromise(2000, productsList.find(item => item.id == id))
        .then((response)=> setProductItem(response))
        .catch((err) => console.error(err))
        .finally(() => setLoadingPage(false))
    }, [id])

    return(
        <>
        
         {loadingPage ? <Loader/> : < ItemDetail item = {productItem}/>}
       
        </>  
        
    )
}

export default ItemDetailContainer
