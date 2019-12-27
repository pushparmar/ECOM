import { createSelector } from 'reselect';

const selectShopData = state => state.shopData;
const COLLECTION_ID_MAPS = {
    hats :1,
    sneakers:2,
    jackets:3,
    womens:4, 
    mens:5,
}

export const selectShopDataSections = createSelector(
    [selectShopData],
    shopData => shopData.SHOP_DATA,
    
)


export const filterShopData = (urlKey) => (
    console.log(selectShopDataSections),
    createSelector(
        [selectShopData],
        shopData => shopData.SHOP_DATA.find(item => item.id === COLLECTION_ID_MAPS[urlKey])
    )
)
