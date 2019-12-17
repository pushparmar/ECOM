import { createSelector } from 'reselect';

const selectCart = ( state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
)

export const selectCartHidden = createSelector(
    [selectCart], 
    cart => cart.hidden
)


export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItem => cartItem.reduce((accumalatedValue , item) => accumalatedValue + item.quantity , 0
    )
)

export const cartItemTotal = createSelector(
    [selectCartItems], 
    cartItem => cartItem.reduce((accumalatedValue , item) => accumalatedValue + item.price , 0
    )
)