import React, { render, Component } from 'react'
import './index.less'

export default class Title extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequire
  // }
  constructor(props) {
    super(props);
  }

  render(){
    const {title, disabled} = this.props;
    return (
      <div>
        <div className={`comp-list-title ${disabled?'disabled':''}`}>{title}</div>
      </div>
    )
  }
}
