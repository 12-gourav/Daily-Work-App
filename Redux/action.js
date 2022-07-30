import axios from "axios";

const server = "https://dailyworkserver.herokuapp.com/api/v1";

///login
export const login = (email,password) => async (dispatch)=>{

    try {
        dispatch({type:"loginRequest"});

        const {data} = await axios.post(`${server}/login`,{email,password},{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"loginSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"loginFail",payload:error.response.data.message});
    }

}

///loadUser
export const loadUser = () => async (dispatch)=>{

    try {
        dispatch({type:"loadUserRequest"});

        const {data} = await axios.get(`${server}/me`,{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"loadUserSuccess",payload:data});

    } catch (error) {
       
        
        dispatch({type:"loadUserFail",payload:error.response.data.message});
    }

}

///logojut
export const logoutUser = () => async (dispatch)=>{

    try {
        dispatch({type:"logoutUserRequest"});

        const {data} = await axios.get(`${server}/logout`,{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"logoutUserSuccess",payload:data});

    } catch (error) {
        console.log(error);
        
        dispatch({type:"logoutFail",payload:error.response.data.message});
    }

}


///Register
export const registerUser = (formData) => async (dispatch)=>{

    try {
        dispatch({type:"registerRequest"});

        const {data} = await axios.post(`${server}/register`,formData,{
            headers:{
            "Content-Type":"multipart/form-data",
            }
        });
 dispatch({type:"registerSuccess",payload:data});

    } catch (error) {
        console.log(error);
        
        dispatch({type:"registerFail",payload:error.response.data.message});
    }

}
///Update user
export const updateUser = (formData) => async (dispatch)=>{

    try {
        dispatch({type:"updateUserRequest"});

        const {data} = await axios.put(`${server}/updateprofile`,formData,{
            headers:{
            "Content-Type":"multipart/form-data",
            }
        });
 dispatch({type:"updateUserSuccess",payload:data});

    } catch (error) {
        console.log(error);
        
        dispatch({type:"updateUserFail",payload:error.response.data.message});
    }

}
///Verify user
export const verifyUser = (otp) => async (dispatch)=>{

    try {
        dispatch({type:"verifyUser"});

        const {data} = await axios.post(`${server}/verify`,{otp},{
            headers:{
                "Content-Type":"application/json",
                }
        });
 dispatch({type:"verifyUserSuccess",payload:data});

    } catch (error) {
        console.log(error);
        
        dispatch({type:"verifyUserFail",payload:error.response.data.message});
    }

}
///Forget user password
export const forgetPassword = (email) => async (dispatch)=>{

    try {
        dispatch({type:"forgetPassword"});

        const {data} = await axios.post(`${server}/forgetpassword`,{email},{
            headers:{
                "Content-Type":"application/json",
                }
        });
 dispatch({type:"forgetPasswordSuccess",payload:data});

    } catch (error) {
        console.log(error);
        
        dispatch({type:"forgetPasswordFail",payload:error.response.data.message});
    }

}

///Reset user password
export const resetPassword = (otp,password) => async (dispatch)=>{

    try {
        dispatch({type:"resetPassword"});

        const {data} = await axios.put(`${server}/resetpassword`,{otp,password},{
            headers:{
                "Content-Type":"application/json",
                }
        });
 dispatch({type:"resetPasswordSuccess",payload:data});

    } catch (error) {
        console.log(error);
        
        dispatch({type:"resetPasswordFail",payload:error.response.data.message});
    }

}



///task
export const addTask = (title,description) => async (dispatch)=>{

    try {
        dispatch({type:"taskRequest"});

        const {data} = await axios.post(`${server}/newtask`,{title,description},{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"taskSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"taskFail",payload:error.response.data.message});
    }

}
///updatetask
export const updateTask = (id) => async (dispatch)=>{

    try {
        dispatch({type:"updateTaskRequest"});
     
        const {data} = await axios.put(`${server}/task/${id}`,{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"updateTaskSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"updateTaskFail",payload:error.response.data.message});
    }

}
///updatetask
export const deleteTask = (id) => async (dispatch)=>{

    try {
        dispatch({type:"deleteTaskRequest"});
     
        const {data} = await axios.delete(`${server}/task/${id}`,{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"deleteTaskSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"deleteTaskFail",payload:error.response.data.message});
    }

}

///work section

///task
export const addWork = (title,description) => async (dispatch)=>{

    try {
        dispatch({type:"workRequest"});

        const {data} = await axios.post(`${server}/newwork`,{title,description},{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"workSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"workFail",payload:error.response.data.message});
    }

}
///updatetask
export const updateWork = (id) => async (dispatch)=>{

    try {
        dispatch({type:"updateWorkRequest"});
     
        const {data} = await axios.put(`${server}/work/${id}`,{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"updateWorkSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"updateWorkFail",payload:error.response.data.message});
    }

}
///updatetask
export const deleteWork = (id) => async (dispatch)=>{

    try {
        dispatch({type:"deleteWorkRequest"});
     
        const {data} = await axios.delete(`${server}/work/${id}`,{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"deleteWorkSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"deleteWorkFail",payload:error.response.data.message});
    }

}



///Client section

///task
export const addClient = (title,description) => async (dispatch)=>{

    try {
        dispatch({type:"clientRequest"});

        const {data} = await axios.post(`${server}/newclient`,{title,description},{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"clientSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"clientFail",payload:error.response.data.message});
    }

}
///updatetask
export const updateClient = (id) => async (dispatch)=>{

    try {
        dispatch({type:"updateClientRequest"});
     
        const {data} = await axios.put(`${server}/client/${id}`,{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"updateClientSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"updateClientFail",payload:error.response.data.message});
    }

}
///updatetask
export const deleteClient = (id) => async (dispatch)=>{

    try {
        dispatch({type:"deleteClientRequest"});
     
        const {data} = await axios.delete(`${server}/client/${id}`,{
            headers:{
            "Content-Type":"application/json",
            }
        });
 dispatch({type:"deleteClientSuccess",payload:data});

    } catch (error) {
        
        dispatch({type:"deleteClientFail",payload:error.response.data.message});
    }

}


///Notifications

export const News = () => async (dispatch)=>{

try {
    dispatch({type:"newsRequest"});

    const {data} = await axios.get(`${server}/updatesResult`);
    dispatch({type:"newsSuccess",payload:data.data});


} catch (error) {
    dispatch({type:"newsFail"});
}



}