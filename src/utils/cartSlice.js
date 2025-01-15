import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
       // items: ["Burger","pizza"],
       items : [],
    },
    reducers:{
        addItem: (state, action) =>{

            // Vanilla (older) Redux => Dont mutate state, returning was mandatory
            // const newState = [...state];
            // newState.item.push(action.payload);
            // return newState;

            //Redux toolkit
            // Mutating the state here its not returning mandatory and behind the scene redux is immutable
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            state.items.pop();
        },
        // originalState = {items: ["pizza"]}
        clearItem: (state, action) =>{

            //Redux toolkit - either mutate the existing state or return a new state
           // state.items.length = 0;   //[]  empty array
        
        return { items: []};  // this new object will be replaced inside original Sate = { items: []}
        
        },
    },
});

export const {addItem, removeItem, clearItem}=cartSlice.actions;

export default cartSlice.reducer;