import ReactDOM from 'react-dom';
import React, {render, Component} from 'react';

import './index.less';

export default class SeachInput extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: ''
    }
    this.ChangeHandle=this.ChangeHandle.bind(this);
    this.keyUpHandle=this.keyUpHandle.bind(this);
  }
  render() {
    return(
     <input className="search-input" type="text" 
     placeholder="请输入关键字" 
     onChange={this.ChangeHandle}
     onKeyUp={this.keyUpHandle}
     value={this.state.value}
     />
    )
  }
  componentDidMount(){
    this.setState({value:this.props.value||''})
  }
  ChangeHandle(e){
    this.setState({
      value:e.target.value
    })
  }
  keyUpHandle(e){
    if(e.keyCode!==13){
      return
    }
    this.props.enterHandle(e.target.value)
  }
}


