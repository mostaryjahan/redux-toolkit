import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/counter/CounterSlice";


const Store = configureStore({ 
    reducer: {
        counter: CounterSlice,
    }
})
export default Store;