import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

// export const getInquiry = createAsyncThunk('/inquiry/getInquiry', async ({kode_produk, uid, pin, idpel1}) => {
//     const payload = {
//         "method"      : "rajabiller.inq",
//         "uid"         : uid,
//         "pin"         : pin,
//         "idpel1"      : idpel1,
//         "idpel2"      : "",
//         "idpel3"      : "",
//         "kode_produk" : kode_produk,
//         "ref1"        : ""
//     }
//     const response = await axios.post('https://rajabiller.fastpay.co.id/transaksi/json_devel.php', {
//         payload
//     })
//     return response.data
// })

// const inquiryEntity = createEntityAdapter({
//     selectId: (inquiry) => inquiry.id
// })

export const inquiry = createSlice({
  name: "inquiry",
  initialState: {
    method: "rajabiller.inq",
    uid: "",
    pin: "",
    idpel1: "",
    idpel2: "",
    idpel3: "",
    kode_produk: "",
    ref1: "",
  },
  // initialState: inquiryEntity.getInitialState(),
  reducers: {
    updateInquiry: (state, action) => {
      state.uid = action.payload.uid;
      state.pin = action.payload.pin;
      state.kode_produk = action.payload.kode_produk;
      state.idpel1 = action.payload.idpel1;

        const payload = {
          method: "rajabiller.inq",
          uid: "SP173269",
          pin: "085648",
          idpel1: "6130070696",
          idpel2: "",
          idpel3: "",
          kode_produk: "GAS",
          ref1: "",
        };
      //   const response = axios.post(
      //     "https://rajabiller.fastpay.co.id/transaksi/json.php",
      //     {
      //       payload,
      //     }
      //   );

       axios.post("https://rajabiller.fastpay.co.id/transaksi/json.php",{
            payload
        })
        .then(function (response) {
          console.log("response is : " + response.data);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.headers, 'INI HEADER');
          } else if (error.request) {
            console.log(error.request, 'INI REQUERST');
          } else {
            console.log(error.message, 'INI MESSAGE');
          }
          console.log(error.config, 'INI CONFIG');
        });

        // console.log(response)
    },
  },
  // extraReducers: {
  //     [getInquiry.fulfilled]: (state, action) => {
  //         inquiryEntity.setAll(state, action.payload)
  //     }
  // }
});

export const { updateInquiry } = inquiry.actions;
// export const inquirySelectors = inquiryEntity.getSelectors(state => state.inquiry)
export default inquiry.reducer;
