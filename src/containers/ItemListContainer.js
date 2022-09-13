import React, { useEffect, useState } from "react"
import getList from "../utils/getList"
import ItemList from "../components/ItemList"
import Loader from "../components/LoaderItem"

function ItemListContainer (text) {

    const [productArray, setProductArray] = useState([])
    const [loadingPage, setLoadingPage] = useState(false)
     useEffect(() => {
        setLoadingPage(true)
        getList()
        .then((response)=> setProductArray(response))
        .catch((err) => console.error(err))
        .finally(() => setLoadingPage(false))
    }, [])

    return(
        <>
         <p className="ItemListContainer-paragraph">{text.greeting}</p>
        
         {loadingPage ? <Loader/> : < ItemList products={productArray}/>}
       
        </>  
        
    )
}

export default ItemListContainer;