const data={
    isLoading:false,
    list:[],
}

let addReducer = function(state=data,action){
    switch (action.type) {
        case "REQUEST_START":
            return {...state,isLoading:true};
        case "SAVELIST":
            return {list:action.list,isLoading:false};
        case "NEWADD":
            return {...state,list:[...state.list,action.info]};
        case "EDITADD":
            let list=[...state.list.filter(item=>item.id!==action.info.id),action.info]
            list.sort((a,b)=>{
                return a.id - b.id
            })
            return {...state,list};
        case "REMOVE":
            return {...state,list:[...state.list.filter(item=>item.id!==action.id)]}
        default:
            return state;
    }
}
export default addReducer;