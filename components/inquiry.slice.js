import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk('/product', async () => {
    const payload = {
        "method"  : "rajabiller.group_produk",
        "group"   : "TV BERLANGGANAN",
        "uid"     : process.env.UID,
        "pin"     : process.env.PIN
    }
    const response = await axios.post('https://rajabiller.fastpay.co.id/transaksi/json.php', payload)
    return response.data
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        product     : [],
        isLoading   : false,
        isError     : false,
    },
    // initialState: inquiryEntity.getInitialState(),
    // reducers: {
    //     updateInquiry: (state, action) => {
    //         state.uid = action.payload.uid;
    //         state.pin = action.payload.pin;
    //         state.kode_produk = action.payload.kode_produk;
    //         state.idpel1 = action.payload.idpel1;

    //         const payload = {
    //             method: "rajabiller.inq",
    //             uid: process.env.UID,
    //             pin: process.env.PIN,
    //             idpel1: "6130070696",
    //             idpel2: "",
    //             idpel3: "",
    //             kode_produk: "GAS",
    //             ref1: "",
    //         };
    //         //   const response = axios.post(
    //         //     "https://rajabiller.fastpay.co.id/transaksi/json.php",
    //         //     {
    //         //       payload,
    //         //     }
    //         //   );

    //         axios.post("https://rajabiller.fastpay.co.id/transaksi/json.php", payload)
    //             .then(function (response) {
    //                 console.log(response.data)
    //             })
    //             .catch(function (error) {
    //                 if (error.response) {
    //                     console.log(error.response.headers, 'INI HEADER');
    //                 } else if (error.request) {
    //                     console.log(error.request, 'INI REQUERST');
    //                 } else {
    //                     console.log(error.message, 'INI MESSAGE');
    //                 }
    //                 console.log(error.config, 'INI CONFIG');
    //             });

    //         // console.log(response)
    //     },
    // },
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.isLoading = true
        },
        [getProduct.fulfilled]: (state, action) => {
            // inquiryEntity.setAll(state, action.payload)
            state.isLoading = false
            state.product   = action.payload
        },
        [getProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.isError   = true
        }
    }
});

// export const { updateInquiry } = inquiry.actions;
// export const inquirySelectors = inquiryEntity.getSelectors(state => state.inquiry)
export default productSlice.reducer;
