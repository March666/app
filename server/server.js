import express from 'express';
import bodyParser from 'body-parser';
import setup from './middlewares/frontendMiddleware';
import path from 'path';
import "babel-polyfill";

const app = new express();
const PORT = 30008;
const isPro = process.env.NODE_ENV ==='production';
let outputPath = path.resolve(process.cwd(), 'dist/smt');
if (isPro) {
  // outputPath = '/wls/appsystems/node_szsc-smt-web-stg2/apps/smt-webapp/dist/smt'
}
console.log('是否是生产环境:'+isPro)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/smt',express.static(path.join(__dirname,'../src/assets/')));
// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: outputPath,
  publicPath: '/smt',
});

//监听8080端口
app.listen(PORT,function(error){
	if (error) {
		console.error(error);
	}else{
		console.info('==> 🌎  Listening on port '+ PORT + '. Open up //localhost:${port}/ in your browser.')
	}
});
