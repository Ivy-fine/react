let data={
    list:[],
    isLoading:false,
    leftlist:[],
    rightlist:[],
    curIndex:0,
    goodslist:[],
    cartlist:[]
}
let reducer = function(state=data,action){
    switch (action.type) {
        case "SAVELIST":
            let arrLeft=action.list.map(item=>item.navtitle)
            return {...state,list:action.list,isLoading:false,leftlist:arrLeft,rightlist:action.list[0].cont};
        case "REQUEST_START":
            return {...state,isLoading:true};
        case "CHANGEINDEX":
            return {...state,curIndex:action.index,rightlist:state.list[action.index].cont};
        case "SAVEGOODSLIST":
            let glist=[]
            state.rightlist.forEach(item=>{
                item.subcont.forEach(item=>{
                    glist.push(item)
                })
            })
            return {...state,goodslist:glist.filter(item=>item.id===action.id)[0].goods};
        case "SAVECARTLIST":
            return {...state,cartlist:[...state.cartlist,action.goods]};
        case "CHANGECOUNT":
            // let cartArr=[...state.cartlist];
            let cartArr=JSON.parse(JSON.stringify(state.cartlist));
            // console.log(cartArr,state.cartlist);
            cartArr.forEach(item=>{
                if(item.id===action.id){
                    if(action.ctype==="+"){
                        item.count++;
                    }else{
                        if(item.count>1)
                        item.count--;
                    }
                }
            })
            return {...state,cartlist:cartArr}
        default:
            return state;
    }
}
export default reducer;