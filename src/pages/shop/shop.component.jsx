import React from 'react';
import CollectionPreivew from '../../component/collection-preview/collection-preview.component';

import {connect} from 'react-redux';
import {selectShopDataSection} from '../../redux/shop_data/shopData.selector';
import {createStructuredSelector} from 'reselect';
const ShopPage = ({SHOP_DATA}) =>{
    return(
        <div className="shop-page">
            {
                SHOP_DATA.map( ({id , ...otherSectionProps}) => {
                    return <CollectionPreivew key={id} {...otherSectionProps}></CollectionPreivew>
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    SHOP_DATA : selectShopDataSection
})


export default connect(mapStateToProps)(ShopPage);