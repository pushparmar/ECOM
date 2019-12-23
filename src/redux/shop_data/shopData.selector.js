import { createSelector } from 'reselect';

const selectShopData = state => state.shopData;


const COLLECTION_ID_MAPS = {
    hats :1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5,
}

export const selectShopDataSection = createSelector(
    [selectShopData],
    (shopData)=> shopData.SHOP_DATA,
)


export const categoryData = urlKey => {
   
    createSelector(
        [selectShopDataSection],
        (collections)=> collections.find(
            collection => {
                return collection.id == COLLECTION_ID_MAPS[urlKey];
            }
            
        )
    )
}
