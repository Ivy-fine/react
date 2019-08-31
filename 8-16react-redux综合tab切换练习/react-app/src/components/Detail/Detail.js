import React, { Component } from "react";

class Detail extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
          let info=this.props.location.state
        return (
            <div>
                <img src={info.pic} alt=""/>
                <h4>{info.title}</h4>
                <p>￥{info.price}</p>
            </div>
        )
    }
}

export default Detail;