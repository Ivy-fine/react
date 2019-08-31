import Axios from "axios";
function request_start() {
    return {
        type: 'REQUEST_START'
    }
}
function request_success(list) {
    return {
        type: 'REQUEST_SUCCESS',
        list
    }
}
function request_list() {
    return (dispatch, getState) => {
        dispatch(request_start());
        setTimeout(() => {
            Axios.get("/getlist").then(res => {
                dispatch(request_success(res.data.list))
            })
        }, 3000)
    }
}
function send(msg){
    return {
        type:'SEND',
        msg
    }
}

export {
    request_list,
    request_start,
    request_success,
    send
}