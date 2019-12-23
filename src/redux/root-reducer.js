import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop_data/shopData.reducer';

export default combineReducers({
    user : userReducer, 
    cart : cartReducer,
    directory: directoryReducer,
    shopData: shopReducer,
})