import Axios from "axios";

function request_start(){
    return {
        type:'REQUEST_START'
    }
}
function request_success(list){
    return {
        type:'REQUEST_SUCCESS',
        list
    }
}

function request_list(){
    return (dispatch)=>{
        dispatch(request_start())
        Axios.get("/getlist").then(res=>{
            dispatch(request_success(res.data.list))
        })
    }
}

function tab(index){
    return {
        type:'TAB',
        curIndex:index
    }
}

export {
    request_list,
    request_start,
    request_success,
    tab
}