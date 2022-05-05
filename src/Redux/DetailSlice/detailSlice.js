import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const api = 'https://www.breakingbadapi.com/api/characters'

export const fetchDetails = createAsyncThunk('details/getDetails', async (char_id) => {
    const res = await axios(`${api}/${char_id}`);
    return res.data;
})
export const detailSlice = createSlice({
    name: 'details',
    initialState: {
        items: [],
        status: 'idle',
    },
    reducers: {},

    extraReducers: {
        [fetchDetails.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchDetails.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        [fetchDetails.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    }
});
export default detailSlice.reducer;