import productsList from "./products";

const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList[0]);
        }, 2000);
    })
}


export default getList;
