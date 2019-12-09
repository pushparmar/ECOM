import React ,{component} from 'react';
import HomePage from './pages/homepage/homepgae-component';

import {Switch , Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import CollectionPreivew from './component/collection-preview/collection-preview.component';
import './App.css';


import Header from './component/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {auth , CreateUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async  userAuth => {
      if(userAuth) {
        console.log(userAuth);
        const userRef = await CreateUserProfileDocument(userAuth)
        console.log(userRef.onSnapshot( (a) => console.log(a.data())));

        userRef.onSnapshot( Snapshot => {
          this.setState = ({
            currentUser : {
                id : Snapshot.id,
                ...Snapshot.data()
            }
          });
          console.log(this.state);
        });

      }else{
        this.setState({currentUser : userAuth})
      }


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
