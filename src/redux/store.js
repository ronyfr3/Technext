import { configureStore } from '@reduxjs/toolkit';
import {BaseAPI} from "./BaseApi";

export default configureStore({
    reducer:{
        [BaseAPI.reducerPath]:BaseAPI.reducer
    }
})