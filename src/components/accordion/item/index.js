import React, { render, Component } from 'react'
import Title from '../../title/index'
import { Accordion } from 'antd-mobile'
import './index.less'

export default class Item extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequire
  // }
  constructor(props) {
    super(props);
  }

  render(){
    const {header, enable} = this.props;
    return (
      <div className={`comp-ac-item ${enable?'disabled':''}`}>
        <Accordion.Panel {...this.props} header={<Title title={header} disabled={enable}/>}>
          {this.props.children}
        </Accordion.Panel>
      </div>
    )
  }
}
