/**
 * 判断用户是否登陆，已登录，直接跳转到指定页面，
 * 未登录，先跳转至登陆页面，登陆成功后跳转至指定页面
 * @param {*登陆成功后的跳转地址} toUrl 
 */
export function login(toUrl) {
  var isLogin = getCookie('login');
  toUrl = toUrl ? toUrl : window.location.href;
  if (isLogin === 'true') {
    window.location.href = toUrl;
  } else {
    window.location.href = '/smtapp/pc/homepage/login.html?ref=' + toUrl
  }
}