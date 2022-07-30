import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({},{
    loginRequest:(state)=>{
        state.loading = true;
    
    },
    loginSuccess:(state,action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;

    },
    loginFail:(state,action)=>{
state.loading = false;
state.isAuthenticated = false;
state.error = action.payload;
    },

loadUserRequest:(state)=>{
    state.loading = true;
},
loadUserSuccess:(state,action)=>{
state.loading = false;
state.isAuthenticated = true;
state.user = action.payload.user;

},
loadUserFail:(state,action)=>{
state.loading = false;
state.user = null;
state.isAuthenticated = false;
state.error = action.payload;
},

logoutUserRequest:(state,action)=>{
    state.loading=true;
},
logoutUserSuccess:(state,action)=>{
    state.loading=false,
    state.isAuthenticated = false;
    state.user = null;
    state.message = action.payload.message;
},
logoutFail:(state,action)=>{
    state.loading=false,
    state.isAuthenticated = true,
    state.user = action.payload.user;
    
},
registerRequest:(state)=>{
    state.loading = true;
},
registerSuccess:(state,action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.message = action.payload.message;

},
registerFail:(state,action)=>{
state.loading = false;
state.isAuthenticated = false;
state.user = null;
state.error = action.payload;
},
updateUserRequest:(state)=>{
state.loading = true;
},
updateUserSuccess:(state,action)=>{
state.loading = false;

state.message = action.payload.message;
},
updateUserFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
verifyUser:(state)=>{
    state.loading = true;
},
verifyUserSuccess:(state,action)=>{
    state.loading = false;

    state.user = action.payload.user;
    state.message = action.payload.message
},
verifyUserFail:(state,action)=>{
    state.loading = false;
 
    state.error = action.payload
},








    clearError:(state)=>{
state.error = null;
    },
    clearMessage:(state)=>{
state.message = null;
    }
});

//// Message Reducers

export const messageReducer = createReducer({},{

taskRequest:(state)=>{
    state.loading = true;
},
taskSuccess:(state,action)=>{
    state.loading = false;
    state.user = action.payload.user;
    state.message = action.payload.message
},
taskFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
updateTaskRequest:(state)=>{
    state.loading = true;
},
updateTaskSuccess:(state,action)=>{
    state.loading = false;
    state.message = action.payload.message;
},
updateTaskFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
deleteTaskRequest:(state)=>{
    state.loading = true;
},
deleteTaskSuccess:(state,action)=>{
    state.loading = false;
    state.message = action.payload.message;
},
deleteTaskFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
workRequest:(state)=>{
    state.loading = true;
},
workSuccess:(state,action)=>{
    state.loading = false;
    state.user = action.payload.user;
    state.message = action.payload.message
},
workFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
updateWorkRequest:(state)=>{
    state.loading = true;
},
updateWorkSuccess:(state,action)=>{
    state.loading = false;
    state.message = action.payload.message;
},
updateWorkFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
deleteWorkRequest:(state)=>{
    state.loading = true;
},
deleteWorkSuccess:(state,action)=>{
    state.loading = false;
    state.message = action.payload.message;
},
deleteWorkFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
clientRequest:(state)=>{
    state.loading = true;
},
clientSuccess:(state,action)=>{
    state.loading = false;
    state.user = action.payload.user;
    state.message = action.payload.message
},
clientFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
updateClientRequest:(state)=>{
    state.loading = true;
},
updateClientSuccess:(state,action)=>{
    state.loading = false;
    state.message = action.payload.message;
},
updateClientFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
deleteClientRequest:(state)=>{
    state.loading = true;
},
deleteClientSuccess:(state,action)=>{
    state.loading = false;
    state.message = action.payload.message;
},
deleteClientFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
forgetPassword:(state)=>{
    state.loading = true;
},
forgetPasswordSuccess:(state,action)=>{
    state.loading = false;
    state.message = action.payload.message
},
forgetPasswordFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},
resetPassword:(state)=>{
    state.loading = true;
},
resetPasswordSuccess:(state,action)=>{
    state.loading = false;
    state.message = action.payload.message
},
resetPasswordFail:(state,action)=>{
    state.loading = false;
    state.error = action.payload;
},

clearError:(state)=>{
    state.error = null;
        },
        clearMessage:(state)=>{
    state.message = null;
        }

});

export const NotificationReducer = createReducer({},{
    newsRequest:(state)=>{
        state.loading = true;
    },
    newsSuccess:(state,action)=>{
        state.loading = false;
        state.news = action.payload;
       
    },
    newsFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
});