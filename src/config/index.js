let host = {}
switch (process.env.NODE_ENV) {
  case 'production':
    host = Object.assign(host,{
      javaHost: 'http://215.128.221.81:8080',
      javaHostImgCode:'http://smt-web-stg.pingan.com.cn:58080',
      // javaHost: 'http://192.168.35.155:8082',
    // javaHost: 'http://10.119.65.27:8080',   //刘志明
  //  javaHost: 'http://10.13.225.216:8080',
      mapHost: 'http://restapi.amap.com'
    })
    break;
  case 'development':
    host = Object.assign(host,{
      javaHost: 'http://smt-web-stg.pingan.com.cn:48080/api/http://215.128.221.81:8080',
      javaHostImgCode:'http://smt-web-stg.pingan.com.cn:58080',
      mapHost: 'http://restapi.amap.com'
    })
    break;
  default:
    host = Object.assign(host,{
      javaHost: 'http://smt-web-stg.pingan.com.cn:48080/api/http://215.128.221.81:8080',
      javaHostImgCode:'http://smt-web-stg.pingan.com.cn:58080',
      mapHost: 'http://restapi.amap.com'
    })
}
const mapKey = '8a8ec3e51d19795646c23fdc10bca253';
const checkInputReg= {
        regEmpty:/^s/,
        reg:/\S/, //不为空为空
        account: /^[a-zA-Z][a-zA-Z0-9]{6,20}$/,  //账号注册
        possword: /^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,15})$/, //密码
        userName: /^[\u4e00-\u9fffa-zA-Z]{2,15}$/,   //真实姓名
        userNum:  /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/, //身份证号码
        useremail: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+/,   //邮箱
        userPhone: /^1[3,4,5,7,8]\d{9}$/,  //手机号
      }
export {
  host,
  mapKey,
  checkInputReg
};
