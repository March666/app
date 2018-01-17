var http = require('http');

function createProxy(path, method, data, body, response){
  const options = {
    hostname: '10.37.84.36',
    port: 8080,
    path: path,
    method: method,
    headers: {
      'Content-Type' : 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const req = http.request(options, (res)=>{
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', () => {
      if (body.indexOf('Proxy Authorization Required')>-1) {
        response.send({code:205,message:'代理解析失败'});
      }else {
        response.send(JSON.parse(body));
      }

    });
  });
  req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
  });
  // 写入数据到请求主体
  req.write(data);
  req.end();
  return req;
}

export default createProxy;
