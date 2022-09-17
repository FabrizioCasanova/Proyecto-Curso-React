import React, { useEffect, useState } from "react"
import getList from "../utils/getList"
import Loader from "../components/LoaderItem"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {

    const [productItem, setProductItem] = useState([])
    const [loadingPage, setLoadingPage] = useState(false)
     useEffect(() => {
        setLoadingPage(true)
        getList()
        .then((response)=> setProductItem(response))
        .catch((err) => console.error(err))
        .finally(() => setLoadingPage(false))
    }, [])

    return(
        <>
        
         {loadingPage ? <Loader/> : < ItemDetail item ={productItem}/>}
       
        </>  
        
    )
}

export default ItemDetailContainer
