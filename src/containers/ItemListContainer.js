import React, { useEffect, useState } from "react"
import ItemList from "../components/ItemList"
import Loader from "../components/LoaderItem"
import { useParams } from "react-router-dom"
import productsList from "../utils/products"
import fetchPromise from "../utils/fetchPromise"

function ItemListContainer (text) {    

    const [productArray, setProductArray] = useState([])
    const [loadingPage, setLoadingPage] = useState(false)
    const { id } = useParams();
     useEffect(() => {
        if(id){ 
            setLoadingPage(true)
             fetchPromise(2000, productsList.filter(item => item.productCategory == id))   
            .then((response)=> setProductArray(response))
            .catch((err) => console.error(err))
            .finally(() => setLoadingPage(false))    
        } else{
        setLoadingPage(true)
         fetchPromise(2000, productsList)   
        .then((response)=> setProductArray(response))
        .catch((err) => console.error(err))
        .finally(() => setLoadingPage(false))
        }  
    }, [id]);

    return(
        <>
         <p className="ItemListContainer-paragraph">{text.greeting}</p>
        
         {loadingPage ? <Loader/> : < ItemList products={productArray}/>}
       
        </>  
        
    )
    }

export default ItemListContainer; 
