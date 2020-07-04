import ItemActionTypes from './item.types';
import { addItemToArr} from './item.utils'

const INITIAL_STATE = {
    isAdded: false,
    drinkItem: [],
    drinkFavorites: []
};

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemActionTypes.LOAD_ITEM:
            return {
                ...state,
                drinkItem: action.payload
            };
        case ItemActionTypes.ADD_ITEM_TO_FAV:
            return {
                ...state,
                drinkFavorites: addItemToArr(state.drinkFavorites, action.payload),
            };
        default:
            return state;
    }
};

export default itemReducer;