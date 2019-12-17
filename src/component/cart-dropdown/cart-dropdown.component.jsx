import React from 'react';
import { connect } from 'react-redux';
import '../cart-dropdown/cart-dropdown.styles.scss';
import Custombutton from '../custom-button/custon-button.component';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {withRouter} from 'react-router-dom';

const CartDropDown = ({ cartItem , history ,dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            cartItem.length ?    
             cartItem.map(item => 
             <CartItem key={item.id} item={item}> </CartItem> ) :
             <span className="empty-cart">Your Cart is empty</span>  
            }
        </div>
        <Custombutton onClick={() => {
            return (
                history.push('/checkout'),
                dispatch(toggleCartHidden())
            )
        }}>Go To Checkout </Custombutton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItem : selectCartItems,
})
export default withRouter(connect(mapStateToProps)( CartDropDown));