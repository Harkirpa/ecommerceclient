const initialState = {
    items: [],
    totalQuantity: 0,
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addItemToCart: (state, action) => {
        state.items.forEach((item) => {
        if(item.id === action.payload.id) {
        state.totalQuantity += 1;
        return state.items
        } else {
        state.items.push(action.payload);
        state.totalQuantity += 1;
        }
        })
      },
      removeItemFromCart: (state) => {
        state.totalQuantity -= 1;
      },
    },
});