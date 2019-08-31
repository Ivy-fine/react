import Axios from "axios";
function changecount(id,ctype){
    return {
        type:"CHANGECOUNT",
        id,
        ctype
    }
}
function savecartlist(goods){
    return{
        type:'SAVECARTLIST',
        goods
    }
}
function savegoodslist(id){
    return{
        type:'SAVEGOODSLIST',
        id
    }
}
function savelist(list){
    return{
        type:'SAVELIST',
        list
    }
}
function changeIndex(index){
    return {
        type:'CHANGEINDEX',
        index
    }
}
function request_start(){
    return {
        type:'REQUEST_START'
    }
}
function request_list(){
    return (dispatch)=>{
        dispatch(request_start())
        Axios.get("/getlist").then(res=>{
            dispatch(savelist(res.data.list))
        })
    }
}
export {
    request_list,
    changeIndex,
    savegoodslist,
    savecartlist,
    changecount
}