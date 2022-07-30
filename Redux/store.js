import {configureStore} from "@reduxjs/toolkit";
import { messageReducer, NotificationReducer, userReducer } from "./reducer";


const store = configureStore({
    reducer:{
auth:userReducer,
message:messageReducer,
news:NotificationReducer
    }
});


export default store;