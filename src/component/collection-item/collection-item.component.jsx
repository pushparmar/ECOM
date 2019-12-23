import React from 'react';
import './collection-item.styles.scss';
import { connect }  from 'react-redux';

import Custombutton from '../custom-button/custon-button.component';
import { addItem } from '../../redux/cart/cart.action';

const collectionItem = ({item , addItem})=> {
    const { id, name ,price ,imageUrl } = item;
    return  <div className="collection-item" key={id}>
                <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                >
                </div>
                
                <div className="collection-footer">
                    <span className='name'>{name}</span>
                    <span className="price">{price}</span>
                </div>
                <Custombutton onClick={()=> addItem(item)} inverted>
                    Add To Cart
                </Custombutton>
            </div>
}

const mapDispatchToPops = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToPops)(collectionItem);