import Axios from "axios";

function request_start() {
    return {
        type: 'REQUEST_START'
    }
}
function request_fail(msg) {
    return {
        type: 'REQUEST_FAIL',
        msg
    }
}
function saveInfo(info) {
    return {
        type: 'SAVEINFO',
        info
    }
}
function request_user(opt) {
    return (dispatch) => {
        dispatch(request_start());
        setTimeout(() => {
            Axios.post("/login", { username: opt.username, pwd: opt.pwd }).then(res => {
                if(res.data.status===200){
                    dispatch(saveInfo(res.data.info))
                }else{
                    dispatch(request_fail(res.data.msg))
                }
            })
        }, 1500)
    }
}

export {
    request_user
}