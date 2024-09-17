import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/counter/CounterSlice";
import PostReducer from "../features/posts/PostSlice";


const Store = configureStore({ 
    reducer: {
        counter: CounterSlice,
        posts: PostReducer
    }
})
export default Store;