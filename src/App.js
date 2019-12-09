import React ,{component} from 'react';
import HomePage from './pages/homepage/homepgae-component';

import {Switch , Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import CollectionPreivew from './component/collection-preview/collection-preview.component';
import './App.css';


import Header from './component/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {auth} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }

  unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
                                this.setState({currentUser : user})
                                console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/SignIn" component={SignInAndSignUp} />
          </Switch>
  
      </div>
    )
  } 
}


export default App;
