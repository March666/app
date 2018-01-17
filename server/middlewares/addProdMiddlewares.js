const path = require('path');
const express = require('express');
import superagent from 'superagent';
const compression = require('compression');

module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'dist/smt');
  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));
  app.get('*',(req, res)=>{res.sendFile(path.resolve(outputPath, 'index.html'))});
  proxyRequest(app);
};

/**
 *@app
 *通过node实现后端接口反向代理
 */
function proxyRequest(app){
  app.use('/api/*',(req, res)=>{
		//获得方法类型
		const method = req.method.toLowerCase();
		const proxyUrl = req.originalUrl.substring(5,req.originalUrl.length);
		const sreq = superagent(method, proxyUrl);
		//如果为 post 或者 put 则需要发送时传递body
	  if (method === 'post' || method === 'put') {
			sreq.send(`jsonData=${JSON.stringify(req.body.jsonData)}`)
	  }
		sreq.pipe(res);
	  sreq.on('end', function (error, result) {
	    if (error) {
	      console.log(error);
	      return;
	    }
	  });
	});
}
