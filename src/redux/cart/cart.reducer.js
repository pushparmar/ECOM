
import CartActionType from './cart.type';
import { addItemToCart } from './cart-utils'
const INITIAL_STATE = {
    hidden : true,
    cartItem:[],
};

 const cartReducer = (state = INITIAL_STATE ,action) => {
    switch(action.type){
            case CartActionType.TOGGLE_CART_HIDDEN:
                return {
                    ...state,
                    hidden : !state.hidden
                };
            case CartActionType.ADD_ITEM:
                return {
                    ...state,
                    cartItem: addItemToCart(state.cartItem , action.payload)
                };    
            case CartActionType.CLEAR_ITEM_FROM_CART:
                return {
                    ...state,
                    cartItem: state.cartItem.filter((item)=> { return item.id !== action.payload.id})
                };
            
            default:
            return state;
    }

 }

 export default cartReducer;