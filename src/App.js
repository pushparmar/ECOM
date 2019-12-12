import React ,{component} from 'react';
import HomePage from './pages/homepage/homepgae-component';

import {Switch , Route ,Redirect} from 'react-router-dom';
import { setCurrentUser } from './redux/user/user.action'


import { connect } from 'react-redux';

import ShopPage from './pages/shop/shop.component'
import CollectionPreivew from './component/collection-preview/collection-preview.component';
import './App.css';



import Header from './component/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {auth , CreateUserProfileDocument} from './firebase/firebase.utils';

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
          </Switch>
  
      </div>
    )
  } 
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
