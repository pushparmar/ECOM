import React from 'react';
import '../cart-dropdown/cart-dropdown.styles.scss';
import Custombutton from '../custom-button/custon-button.component';

const CartDropDown = () =>(
    <div className="cart-dropdown">
        <div className="cart-items">
            <Custombutton>Go To Checkout </Custombutton>
        </div>
    </div>
)

export default CartDropDown;