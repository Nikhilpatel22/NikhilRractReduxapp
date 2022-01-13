import { CREATE_ORDER,CLEAR_CART,CLEAR_ORDER} from '../constants'

export const createOrder = (order) => (dispatch)=>{
    fetch("/api/orders",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: json.stringify(order)
    })
    .then((res)=>res.json())
    .then((data)=>{
        dispatch({type: CREATE_ORDER,payload:data})
        localStorage.clear("cartItem");
        dispatch({type:CLEAR_CART})
    })
};
export const clearOrder = () =>(dispatch)=>{
    dispatch({type:CLEAR_ORDER})
}