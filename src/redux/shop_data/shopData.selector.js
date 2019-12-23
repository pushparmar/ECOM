import { createSelector } from 'reselect';

const selectShopData = state => state.shopData;

export const selectShopDataSection = createSelector(
    [selectShopData],
    (shopData)=> shopData.SHOP_DATA,
)

