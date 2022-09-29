import React, { useEffect, useState } from "react"
import ItemList from "../components/ItemList"
import Loader from "../components/LoaderItem"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/configFirebase"

function ItemListContainer (text) {    

    const [productArray, setProductArray] = useState([])
    const [loadingPage, setLoadingPage] = useState(false)
    const { id } = useParams();
     useEffect(() => {
            
            setLoadingPage(true)
            async function fetchFirestore(){
            let q
            if (id){
                q = query(collection(db, "Products"), where('productCategory', '==', parseInt(id)))
            }else {
                q = query(collection(db, "Products"))
            }
            const querySnapshot = await getDocs(q);
            const firestoreData = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
            return firestoreData
        }
        fetchFirestore()
        .then(result => setProductArray(result))
        .finally(() => setLoadingPage(false))
        },[id])

    return(
        <>
         <p className="ItemListContainer-paragraph">{text.greeting}</p>
        
         {loadingPage ? <Loader/> : < ItemList products={productArray}/>}
       
        </>  
        
    )
   }

export default ItemListContainer; 
