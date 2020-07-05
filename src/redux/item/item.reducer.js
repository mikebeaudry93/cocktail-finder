import ItemActionTypes from './item.types';
import { addItemToArr, deleteItemfromArr} from './item.utils'

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
        case ItemActionTypes.DELETE_ITEM:
            return {
                ...state,
                drinkFavorites: state.drinkFavorites.filter(item => item.idDrink !== action.payload.idDrink),
            }
        default:
            return state;
    }
};

export default itemReducer;