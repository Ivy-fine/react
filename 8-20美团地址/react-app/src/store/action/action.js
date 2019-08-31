import Axios from "axios";

function request_start(){
    return {
        type:'REQUEST_START'
    }
}
function savelist(list){
    return {
        type:"SAVELIST",
        list
    }
}
function request_list(){
    return (dispatch)=>{
        dispatch(request_start())
        Axios.get('/getlist').then(res=>{
            dispatch(savelist(res.data.list))
        })
    }
}

function newAdd(info){
    return {
        type:'NEWADD',
        info
    }
}
function editAdd(info){
    return {
        type:'EDITADD',
        info
    }
}
function remove(id){
    return {
        type:'REMOVE',
        id
    }
}
export {
    request_list,
    newAdd,
    editAdd,
    remove
}