import React from 'react';
import './category.styles.scss';


import CollectionItem from '../../component/collection-item/collection-item.component';
import {categoryData} from '../../redux/shop_data/shopData.selector';
import { connect } from 'react-redux';


const CategoryPage = ({ match ,collection }) => {
    console.log(collection)
    return (
    <div className="category">
        <h2>
            CATEGORY PAGE
        </h2>
       
    </div>
    )
}


const mapStateToProps = (state , ownProps) => ({
    collection : categoryData(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CategoryPage);