import React ,{component} from 'react';
import HomePage from './pages/homepage/homepgae-component';

import {Switch , Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import CollectionPreivew from './component/collection-preview/collection-preview.component';
import './App.css';

const hats = ()=> (
    <div>its a hats page</div> 
)

function App(){
  return (
    <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>

    </div>
  )
} 

export default App;
