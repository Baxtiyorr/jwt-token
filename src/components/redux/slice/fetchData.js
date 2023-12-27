import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('fetchData', async (url) =>{
    try {
        const response =  await fetch(url);
        return response.json()
    } catch (error) {
        console.log();
    }
})

const getDataSlice = createSlice({
    name:'data',
    initialState:{
        loading:false,
        data: [],
        error: false
    },

    extraReducers: (builder) =>{
        builder
        .addCase(fetchData.pending, (state) =>{
            state.loading = true
        })
        .addCase(fetchData.fulfilled, (state, action) =>{
            state.loading = true;
            state.data = action.payload;
            state.error = false;
        })
        .addCase(fetchData.rejected, (state) =>{
            state.loading = false;
            state.error = true;
        })
    }
})


export default getDataSlice.reducer