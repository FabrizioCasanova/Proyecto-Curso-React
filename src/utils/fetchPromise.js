/*import productsList from "./products";

const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList);
        }, 2000);
    })
}


export default getList; */

let isTrue = true

 function fetchPromise (time, array){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (isTrue) {
                resolve (array)
            } else {
                reject("Error")
            }
        }, time ) 
    })
}   

export default fetchPromise