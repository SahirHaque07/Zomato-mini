import { ADD_TO_CART } from "../constant";


const addToCartReducer = (state ={cartItems : []}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
              return {
                ...state,
                cartItems: state.cartItems.map((x) =>
                  x.product === existItem.product ? item : x
                ),
              };
            } else {
              return {
                ...state,
                cartItems: [...state.cartItems, item],
              };
            }
           
            case "ERROR_CART":return{error:action.payload}

            case "CART_REMOVE_ITEM":return{
                ...state,cartItems:state.cartItems.filter((x)=>x.product!==action.payload)
            }
           default:return state
    }
}

export { addToCartReducer }