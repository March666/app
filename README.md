市民通项目PC端
================

git clone git@10.11.112.66:ZHANGXIFENG377/smt-pc.git

启动项目
-
* pc端
npm run start
* 移动端
npm run start_mobile

编译项目
-
* pc端
npm run build
* 移动端
npm run build_desktop

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
  
移动端与PC端说明
-----------
1. 项目入口文件与html主页分别加入了desktop/mobile文件名后缀
2. 移动端专用样式，模块，组件增加一级mobile文件路径
  
##项目规范
  