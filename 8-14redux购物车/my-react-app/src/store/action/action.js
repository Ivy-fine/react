function add(id){
    return {
        type:'ADD',
        id
    }
}
function sub(id){
    return {
        type:'SUB',
        id
    }
}

export {
    add,
    sub
}