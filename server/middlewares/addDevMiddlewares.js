import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import createProxy from '../proxy';
import webpack from 'webpack';
import path from 'path';

function createWebpackMiddleware(compiler, publicPath){
	return webpackDevMiddleware(compiler,{
		noInfo: true,
		aggregateTimeout:100,
    publicPath,
    silent: true,
		warnings:false,
    stats: 'errors-only',
	});
}

function addDevMiddlewares(app,webpackConfig){
	const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);
  const fs = middleware.fileSystem;

	app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*',(req,res,next)=>{
    fs.readFile(path.join(compiler.outputPath,`index.html`),(err, file)=>{
      if(err){
        res.sendStatus(404);
      }else{
        res.send(file.toString());
      }
    })
  });
	//通过node实现后端接口反向代理
	app.use('/api/*',(req, res)=>{
	  const method = req.method.toLowerCase(),
					proxyUrl = req.originalUrl.substring(5,req.originalUrl.length),
	        data = `{jsonData:${JSON.stringify(req.body.jsonData)}}`;
	  let body = '';
	  createProxy(proxyUrl, method, JSON.stringify(req.body), body, res);
		// //获得方法类型
		// const method = req.method.toLowerCase(),
		// 			proxyUrl = req.originalUrl.substring(5,req.originalUrl.length),
		// 			sreq = superagent(method, proxyUrl);
		// //如果为 post 或者 put 则需要发送时传递body
		// console.log(proxyUrl,method);
	  // if (method === 'post' || method === 'put') {
		// 	sreq.send(`jsonData=${JSON.stringify(req.body.jsonData)}`)
	  // }
		// sreq.pipe(res);
	  // sreq.on('end', function (error, result) {
		// 	console.log(result);
	  //   if (error) {
	  //     console.log(error);
	  //     return;
	  //   }
	  // });
	});
}
export default addDevMiddlewares;
