import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import {selectShopDataSections} from '../../redux/shop_data/shopData.selector';

import CollectionPreivew from '../collection-preview/collection-preview.component';

const CollectionOverView = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map( ({id , ...otherCollectionProps})=>{
                return <CollectionPreivew key={id} {...otherCollectionProps}></CollectionPreivew>
            })
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopDataSections,
})

export default connect(mapStateToProps)(CollectionOverView);