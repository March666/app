export function getParams(name){
  const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  const result = window.location.search.substr(1).match(reg);
  if(result!=null)return decodeURI(result[2]); return null;
}
export function weatherText2Icon(weatherText){
  if (weatherText=='暴雪') {
    return 'btn_baoxue.png'
  }else if (weatherText=='暴雨') {
    return 'btn_baoyu.png'
  }else if (weatherText=='大雪') {
    return 'btn_dayu.png'
  }else if (weatherText=='大雨') {
    return 'btn_dayu.png'
  }else if (weatherText=='多云') {
    return 'btn_duoyun.png'
  }else if (weatherText=='雷暴') {
    return 'btn_lebao.png'
  }else if (weatherText=='雷阵雨') {
    return 'btn_leizhenyu.png'
  }else if (weatherText=='霾') {
    return 'btn_mai.png'
  }else if (weatherText=='沙尘暴') {
    return 'btn_shachenbao.png'
  }else if (weatherText=='晴') {
    return 'btn_sun.png'
  }else if (weatherText=='特大暴雨') {
    return 'btn_tedabaoyu.png'
  }else if (weatherText=='雾') {
    return 'btn_wu.png'
  }else if (weatherText=='小雪') {
    return 'btn_xiaoue.png'
  }else if (weatherText=='小雨') {
    return 'btn_xiaoyu.png'
  }else if (weatherText=='阴') {
    return 'btn_yin.png'
  }else if (weatherText=='雨夹雪') {
    return 'btn_yujiaxue.png'
  }else if (weatherText=='中雪') {
    return 'btn_zhongxue.png'
  }else if (weatherText=='中雨') {
    return 'btn_zhongyu.png'
  }else {
    return 'btn_sun.png'
  }
}

// 存读取cookie
export function setCookie(c_name, cvalue, expiredays) {
  const exp = new Date();
  exp.setTime(exp.getTime() + expiredays * 24 * 60 * 60 * 1000); //
  document.cookie = c_name + "=" + escape(cvalue) + ";expires=" + exp.toGMTString() + ";path=/";
}
export function getCookie(c_name) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
     let c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

export function getPlatform(){
  const userAgent = window.navigator.userAgent.toLocaleLowerCase();
  if (/(iphone|ipad|ipod|ios)/i.test(userAgent)) {
    return 'ios'
  }else if (/(android)/i.test(userAgent)) {
    return 'android'
  }else {
    return 'web'
  }
}
