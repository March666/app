import ReactDOM from 'react-dom';
import React, {render, Component} from 'react';
import './index.less';
import HomeHeader from '../../components/homeHeader'
import {fetchDetails} from '../../store/index'

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state={
      online:[]
    },
    fetchDetails({},(json)=>{
        const online = [];
        online.push(json);
        this.setState({online});
      }
    )
  }
  componentDidMount(){
  }
  render() {
    return(
     <div className="home">
       <HomeHeader/>
     </div>
    )
  }
}
