// ADD
export const addCart = (product) =>{
    return{
        type : "ADDITEM",
        payload : product
    }
}

// DELETE
export const delCart = (product) =>{
    return{
        type : "DELITEM",
        payload : product
    }
}