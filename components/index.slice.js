import { createSlice } from "@reduxjs/toolkit";

export const tambahkurang = createSlice({
    name: 'tambahKurang',
    initialState: {
        total: 0
    },
    reducers: {
        tambah(state){
            state.total += 1
        },
        kurang(state){
            state.total -= 1
        }
    }
})

export const {actions} = tambahkurang
export const {tambah, kurang} = actions