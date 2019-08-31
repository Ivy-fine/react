let list = [{
    "id": 1,
    "pic": "img/logo512.png",
    "title": "唯品自营|【字母羽毛印花】女装T恤短袖韩版宽松女士",
    "price": 40,
    "count": 1
}, {
    "id": 2,
    "pic": "img/logo512.png",
    "title": "唯品自营|圆领短袖女式上衣宽松韩版19款夏装小狗刺绣",
    "price": 62,
    "count": 1
}, {
    "id": 3,
    "pic": "img/logo512.png",
    "title": "唯品自营|【字母羽毛印花】女装T恤短袖韩版宽松女士",
    "price": 58,
    "count": 1
}]
const countReducer = (state = list, action) => {
    switch (action.type) {
        case "ADD": {
            let good = state.find((g) => { return g.id === action.id })
            if (good.count < 5)
                good.count++;
            return [...state];
        }
        case "SUB": {
            let good = state.find((g) => { return g.id === action.id })
            if (good.count > 1)
                good.count--;
            return [...state];
        }
        default:
            return state;
    }
}
export default countReducer;