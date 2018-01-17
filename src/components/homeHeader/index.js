import ReactDOM from 'react-dom';
import React, {render, Component} from 'react';

import './index.less';
import SeachInput from '../searchInput'

export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  componentDidMount(){
  }
  render() {
    return(
     <div className="homeheader clear">
       <div className="left float-left icon iconfont icon-jiqiren"></div>
       <div className="right float-right icon iconfont icon-icon-system-fn-remind"></div>
       <div className="middle">
         <SeachInput/>
       </div>
     </div>
    )
  }
}


