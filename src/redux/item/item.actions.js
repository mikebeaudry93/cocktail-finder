import  ItemActionTypes  from './item.types';

export const loadItem = item => ({
    type: ItemActionTypes.LOAD_ITEM,
    payload: item
});

export const toggleItemAdded = () => ({
    type: ItemActionTypes.TOGGLE_ITEM_ADDED
});

export const addItemToFav = item => ({
    type: ItemActionTypes.ADD_ITEM_TO_FAV,
    payload: item
});

export const deleteItem = item => ({
    type: ItemActionTypes.DELETE_ITEM,
    payload: item
})