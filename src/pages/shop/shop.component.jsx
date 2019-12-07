import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreivew from '../../component/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            colllections : SHOP_DATA
        }
    }

    render(){
        const {colllections} = this.state;
        return(
            <div className="shop-page">
                {
                    colllections.map( ({id , ...otherSectionProps}) => {
                        return <CollectionPreivew key={id} {...otherSectionProps}></CollectionPreivew>
                    })
                }
            </div>
        )
    }
}

export default ShopPage;