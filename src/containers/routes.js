import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import React, { render, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Home from './home';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animateCls : 'in'
    }
  }
  componentWillUpdate(){
    // this.setState({animateCls:'back'});
  }
  componentDidMount() {
    PubSub.subscribe('BEFOREPOPSTATE',()=>{
      this.setState({animateCls:'out'});
      setTimeout(()=>{
        this.setState({animateCls:'in'});
      },250)
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Route render={({location}) => {
            return (
              <ReactCSSTransitionGroup
                component="div"
                transitionName={this.state.animateCls}
                transitionEnter={true}
                transitionLeave={false}
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
              >
                <div key={location.pathname}>
                  {/**就业服务**/}
                  {/* <Route path={`/smt/employment`} render={({location})=>{
                    return (
                      <div key='1'>
                        <Route exact path={`/smt/employment/introduction`} component={Introduction}/>
                        <Route exact path={`/smt/employment/jobFair`} component={JobFair}/>
                        <Route path={`/smt/employment/market`} component={Market}/>
                        <Route exact path={`/smt/employment/details`} component={Details}/>
                      </div>
                    )
                  }}/> */}
                  {/**出入境**/}
                  <Route path="/smt/home" component={Home} />
                </div>
              </ReactCSSTransitionGroup>
            )
          }} />
        </div>
      </Router>
    )
  }
};
