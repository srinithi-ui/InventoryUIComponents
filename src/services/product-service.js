const baseUrl = 'http://localhost:8098/httpmethod/product'
const getAllProducts = () => {
    const url = baseUrl;
    return fetch(url)
}
const createOrder = (orderDetails) => {
    return fetch("http://localhost:8098/httpmethod/product/order",{
        method:"POST",
        body:JSON.stringify(orderDetails),
        headers:{
            "Content-Type" : "application/json"
        },
        mode:'cors'

    })
}

const addOrder = (addDetails) => {
    return fetch("http://localhost:8098/httpmethod/product/add",{
        method : "POST",
        body:JSON.stringify(addDetails),
        headers : {
            "Content-Type" : "application/json"
        },
        mode:'cors'
    })
}
const updateOrder = (updateDetails, id) => {
    return fetch("http://localhost:8098/httpmethod/product/update/"+id,{
        method : "PUT",
        body:JSON.stringify(updateDetails),
        headers : {
            "Content-Type" : "application/json"
        },
        mode:'cors'
    })
}
const getProductByName = (name) => {
    return fetch("http://localhost:8098/httpmethod/product/name/"+name)
}

export default {
    getAllProducts,
    createOrder,
    addOrder,
    updateOrder,
    getProductByName
}