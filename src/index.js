import React, {render} from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.less';
import Application from './containers/Application';
import initReactFastclick from 'react-fastclick';
initReactFastclick();

ReactDOM.render(
  <Application />,
  document.getElementById('root')
)
