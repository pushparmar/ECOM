import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import {selectShopDataSection} from '../../redux/shop_data/shopData.selector';

const collectionOverView = (collections) => (
    <div className="collection-overview">
        {
            collections.map( ({id , ...otherCollectionProps})=>{
                <CollectionPreivew key={id} {...otherCollectionProps}></CollectionPreivew>
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopDataSection,
})

export default connect(mapStateToProps)(collectionOverView);