export const addItemToArr = (existingItems, itemToAdd) => {
    const alreadyExists = existingItems.find(item => item.idDrink === itemToAdd.idDrink);

    if (alreadyExists) {
       return existingItems
    }

        return [...existingItems, {...itemToAdd}];
    
};

// export const isAddedFunc = state => {
//    if(state === false) {
//        return state = true
//    }
// }