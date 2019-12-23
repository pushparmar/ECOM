import React from 'react';
import CollectionOverView from '../../component/collection-overview/collection-overview.component';
import CategoryPage from '../../pages/category/category.component';
import {Switch , Route ,Redirect} from 'react-router-dom';

const ShopPage = ({match}) =>{
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverView} />
            <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
        </div>
    )
}

export default ShopPage;