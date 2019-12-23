import React from 'react';
import HomePage from './pages/homepage/homepgae-component';

import {Switch , Route ,Redirect} from 'react-router-dom';
import { setCurrentUser } from './redux/user/user.action'
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';

import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component'
import Checkoutpage from './pages/checkout/checkout.component';
import Catalog from './pages/catalog-page/catalog.component';
// import CollectionPreivew from './component/collection-preview/collection-preview.component';
import './App.css';



import Header from './component/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {auth , CreateUserProfileDocument} from './firebase/firebase.utils';


const hats = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

const jackets = () => (
  <div>
    <h1>jackets page</h1>
  </div>
)

const sneakers = () => (
  <div>
    <h1>sneakers page</h1>
  </div>
)

const mens = () => (
  <div>
    <h1>mens page</h1>
  </div>
)

const womens = () => (
  <div>
    <h1>womens page</h1>
  </div>
)

class App extends React.Component{

  unSubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async  userAuth => {
      if(userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);

        userRef.onSnapshot( Snapshot => {
          setCurrentUser({
            id : Snapshot.id,
            ...Snapshot.data()
          });
        });

      }
      setCurrentUser(userAuth)
  
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/SignIn" 
              render={ () =>
                this.props.currentUser ? (<Redirect to='./' />) : <SignInAndSignUp/>             
              }
            />
             <Route exact path="/checkout" component={Checkoutpage} />
             <Route exact path="/catalog" component={Catalog} />
             <Route exact path="/shop/hats" component={hats} />
             <Route exact path="/shop/jackets" component={jackets} />
             <Route exact path="/shop/sneakers" component={sneakers} />
             <Route exact path="/shop/womens" component={womens} />
             <Route exact path="/shop/mens" component={mens} />
          </Switch>
  
      </div>
    )
  } 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
