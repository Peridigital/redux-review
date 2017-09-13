const initialState = {
    items: []
}

const ADD_ITEM = "ADD_ITEM"

export default function (state = initialState, action ) {
    switch (action.type) {
        case ADD_ITEM:
            var newItems = [...state.items, action.payload]
            return Object.assign({}, state, {items: newItems} )
            
    
        default:
            return state
    }
}


export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}