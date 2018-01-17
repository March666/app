import addProdMiddlewares from './addProdMiddlewares';
import addDevMiddlewares from './addDevMiddlewares';
import webpackConfig from '../../webpack/webpack.dev.js';

function setup(app, options){
  const isProd = process.env.NODE_ENV === 'production';
  console.log('是否是生产环境：'+isProd);
  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
export default setup;
