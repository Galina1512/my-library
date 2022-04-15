import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice ({
    name: 'books',
    initialState: {
        selectedGanre: "ДЕТЕКТИВЫ"
    },
    reducers: {
        filterGanre: (state, action) =>{
            state.selectedGanre = action.payload;
        }
    }
})
export const getSelectedGanre = state => state.books.selectedGanre;
export const { filterGanre } = booksSlice.actions;
export default booksSlice.reducer;