import React,{Component} from "react"
import {connect} from "dva"

class Home extends Component{
    render(){
        return (
            <React.Fragment>
                数量是：{this.props.num}
                <button onClick={ e => this.props.dispatch({type: "index/changeNum", payload: {num: 6}})}>修改num</button>
            </React.Fragment>
        )
    }
}
export default connect(state => {
    return {
        num: state.index.num //这里的index是命名空间
    }
})(Home);