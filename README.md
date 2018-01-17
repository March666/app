app
================

git clone git@github.com:March666/smt-app.git

启动项目

npm run start


编译项目

npm run build


项目结构
-----------------

  |-----dist  编译后文件
  
  |-----src   项目源代码
  
  |-----server node服务端，主要作为web容器和后端接口转发 
  
    |---components 公用组件 
    |---containers 页面（页面模板、js、css）
    |---utils      常用工具类
    |---routes.js  页面路由主要用于打包
  |-----webpackage webpackage配置文件
  
  |-----gitignore
  
  |-----package.json
  