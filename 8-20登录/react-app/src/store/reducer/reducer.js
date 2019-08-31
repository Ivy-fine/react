const data={
    info:{},
    isLoading:false,
    logined:false,
    msg:''
}
let userReducer=function(state=data,action){
    switch (action.type) {
        case 'REQUEST_START':
            return {...state,isLoading:true,msg:""}    
        case 'REQUEST_FAIL':
            return {...state,isLoading:false,msg:action.msg}
        case "SAVEINFO":
            return {info:action.info,isLoading:false,logined:true,msg:""}        
        default:
            return state;
    }
}

export default userReducer;