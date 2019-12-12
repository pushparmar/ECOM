import React from 'react';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/crown.svg';
import {auth} from '../../firebase/firebase.utils'


const Header = ({currentUser}) => {
    return <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"></Logo>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>

            {   currentUser ?
                <div className="option" onClick={()=> auth.signOut()}>Sign Out</div>:
                <Link className="option" to="/SignIn">Sign In</Link>
            }
           <CartIcon />
        </div>
        <CartDropDown></CartDropDown>
    </div>
}

const mapStatetoProps = state => ({
    currentUser : state.user.currentUser
})


export default connect(mapStatetoProps)(Header);