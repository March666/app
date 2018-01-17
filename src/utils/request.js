import {polyfill} from 'es6-promise';
import isomorphic from 'isomorphic-fetch';
polyfill();

function objectToRequestParams(data){
  let result = '?';
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      result+=`${key}=${data[key]}&`
    }
  }
  return result.substring(0,result.length-1);
}
export function get(url, data, success, error){
  const queryParams = objectToRequestParams(data);
  return request(`${url}${queryParams}`,{method:'GET'}, success, error);
}

export function post(url, data, success, error){
  const options = {
    method: 'post',
    headers:{
      'Accept': 'application/json;charset=utf-8',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:JSON.stringify({"jsonData":{data:data}})
  }
  return request(url, options, success, error);
}

function request(url, options, success=(json)=>{}, error=(error)=>{}){
  return isomorphic(url,Object.assign({mode:'cors'},options)).then((response)=>{
    if (response.status>=400) {
      return {
        message : response.statusText,
        status : response.statusText
      };
    }
    return response.json()
  }).then((json)=>{
    success(json);
  })
}
function toParams(obj) {
  var param = ""
  for(const name in obj) {
      if(typeof obj[name] != 'function') {
          param += "&" + name + "=" + encodeURI(obj[name])
      }
  }
  return param.substring(1)
}
