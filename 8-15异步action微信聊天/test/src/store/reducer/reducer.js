let opt={
    list:[],
    isloading:false
}
const msgReducer=function(state=opt,action){
    switch(action.type){
        case "REQUEST_START":
            return {...state,isloading:true};
        case "REQUEST_SUCCESS":
            return {list:action.list,isloading:false};
        case "SEND":
            let arr=state.list;
            arr.push({
                id:arr[arr.length-1].id+1,
                avatar:arr[0].avatar,
                text:action.msg
            })
            return {...state};
        default:
            return state;
    }
}
export default msgReducer;