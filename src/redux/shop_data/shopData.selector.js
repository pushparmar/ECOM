import { createSelector } from 'reselect';

const selectShopData = state => state.shopData;

console.log(selectShopData)
const COLLECTION_ID_MAPS = {
    hats :1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5,
}

export const selectShopDataSections = createSelector(
    [selectShopData],
    shopData => shopData.SHOP_DATA
)


export const selectShopDataSection = urlKey => {
    console.log(urlKey);
    createSelector(
        [selectShopDataSections],
        SHOP_DATA => SHOP_DATA.find(item => item.id === COLLECTION_ID_MAPS[urlKey])
    )
}
