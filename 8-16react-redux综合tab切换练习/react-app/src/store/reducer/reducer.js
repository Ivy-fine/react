let data={
    list:[],
    isLoading:true,
    curIndex:0
}
const listReducer=function(state=data,action){
    switch (action.type) {
        case "REQUEST_START":
            return {...state,isLoading:true}
        case "REQUEST_SUCCESS":
            return {...state,list:action.list,isLoading:false}
        case "TAB":
            return {...state,curIndex:action.curIndex}
        default:
            return state;
    }
}

export default listReducer;