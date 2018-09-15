const usuario = {
    state:{
        email:'',
        isLogin:false
    },
    mutations:{
      
        SET_LOGIN:(state,email)=>{
            console.log("ENTRA mutacion")
            state.isLogin=true
            state.email =email
        },
        SET_LOGOFF:(state)=>{
            state.isLogin=false
        }
    },
    actions:{
        Login({commit},email){
            console.log("ENBTRA accion")
            commit('SET_LOGIN',email)
        }
    }
}

export default usuario