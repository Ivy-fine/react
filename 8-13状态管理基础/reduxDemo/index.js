function countReducer(state = 10,action){
    switch(action.type){
        case 'ADD':
            return state+1;
            break;
        case 'SUB':
            return state-1;
            break;
        default:
            return state;
            break;
    }
}

let store = Redux.createStore(countReducer)
store.subscribe(()=>{
    // console.log(store.getState())
})
class MyCom extends React.Component{
    constructor(){
        super();
        this.state={
            count:10
        }
    }
    componentDidMount(){}
    handleClick=(type)=>{
        store.dispatch({type})
        this.setState({
            count:store.getState()
        })
    }
    render(){
        return (
            <div>
                <button onClick={()=>{this.handleClick('SUB')}}>-</button>
                <span> {this.state.count} </span>
                <button onClick={()=>{this.handleClick('ADD')}}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<MyCom></MyCom>,document.getElementById("app"))