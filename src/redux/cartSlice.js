import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice ({
name: 'cart',
initialState: {
    cartItems: []
},
reducers: {
addItemsToCart: (state, action) =>{
    const timeId = new Date().getTime();

    state.cartItems.push({
        id: timeId,
        bookId: action.payload.book.id

    })
},
removeItemFromCart: (state, action) => {
    state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId
    )
}
}
})
export const getCartItems = state =>state.cart.cartItems;
export const { addItemsToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;