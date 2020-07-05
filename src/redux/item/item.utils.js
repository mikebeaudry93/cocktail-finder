export const addItemToArr = (existingItems, itemToAdd) => {
    const alreadyExists = existingItems.find(item => item.idDrink === itemToAdd.idDrink);

    if (alreadyExists) {
       return existingItems
    }

    return [...existingItems, {...itemToAdd}];
    
};

// export const deleteItemfromArr = (exisitingItems, itemToDelete) => {

//     const deleted = exisitingItems.filter(item => 
//         item.idDrink !== itemToDelete.idDrink
//     );

//     return deleted
    
// }

// deleteItemfromArr(state.drinkFavorites, action.payload)
