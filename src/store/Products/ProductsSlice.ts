import { products } from '@/modules/Products/models/Products'
import { Products } from './type'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState: Products = {
  products:[],
  queryName:"",
  selectType:null,
  cart:[]
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getQueryName: (state, action: PayloadAction<string>) => {
      state.queryName = action.payload;
      
    },
    getTypeProduct: (state, action: PayloadAction<string>) => {
      state.selectType = action.payload
    },
    setData: (state, action: PayloadAction<Array<any>>) => {
      state.products = action.payload
      
    },
    resetData: (state, action: PayloadAction<void>) => {
      state.selectType = null ;
    },
    getProductCart:(state, action: PayloadAction<products>) => {
      
      if (!state.cart.find((element) => element.id === action.payload.id)) {
        state.cart = state.cart.concat({ ...action.payload, quantity: 1 });
      }
     
    },

    

  },
})

// Action creators are generated for each case reducer function
export const { getQueryName,getTypeProduct,setData,resetData,getProductCart } = productsSlice.actions

export default productsSlice.reducer