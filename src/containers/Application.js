import React, {render, Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Routes from './routes';

export default class Application extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <Routes/>
      </div>
    )
  }
}
