let defaultState={
    selectedItem: {items:[],restaurantName:""},
}

let cartReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":{
            let newState={...state};
            newState.selectedItem={
                items: [...newState.selectedItem.items,action.payload],
                restaurantName: action.payload.restaurantName,
            };
            console.log(newState,"=>")
            return newState;
        }

        default: return state;
    }
}