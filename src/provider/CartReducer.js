export const CARTACTIONS ={
    DECREASE:"DECREASE",
    INCREASE:"INCREASE",
    ADD:"ADD",
    REMOVE:"REMOVE"
}



export const cartReducer = (state, action) =>{
    switch(action.type){
        case CARTACTIONS.ADD:
        const existingItem = state.find((i) =>i.id == action.intern);
        if(existingItem){
            return state.map((item)=>item.id === action.intern.id?
        {
            ...item, quantity:item.quantity + 1 
        }:item)
        } else{
            return [...state, {...action.intern, quantity:1}]
        }


       case CARTACTIONS.REMOVE:
       return state.filter((intern) => intern.id !== action.intern.id);
        default:
      state;
    }

   
}


// export const cartReducer = (state, action) => {

//   switch (action.type) {
//     case ADD:
//       return { ...state, cart: [...state.cart, action.payload] };
//     case REMOVE:
//       return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
//     default:
//       return state;
//   }
// };


