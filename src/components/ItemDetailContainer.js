import React, { useEffect, useState } from "react"
import Loader from "../components/LoaderItem"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/configFirebase"
function ItemDetailContainer () {

    const [productItem, setProductItem] = useState({})
    const [loadingPage, setLoadingPage] = useState(false)

    const { id } = useParams();
     useEffect(() => {
            setLoadingPage(true)
            const docRef = doc(db, "Products", id);
            getDoc(docRef)
            .then(result => setProductItem({
                id: result.id,
                ...result.data() 
            }))
            .finally(() => setLoadingPage(false))
    }, [id])

    return(
        <>
        
         {loadingPage ? <Loader/> : < ItemDetail item = {productItem}/>}
       
        </>  
        
    )
}

export default ItemDetailContainer
