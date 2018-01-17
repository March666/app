// let zoom = 14;
function getMap(center){
  const map = new AMap.Map('map',{
    resizeEnable: true,
    zoom:14,
    center: center
    // center: [114.102137,22.56713]
  });
  const content= `<div classname="map-marsk" style="width:25px;height:34px;background: url('./images/community/btn_fixed_position_red.png') no-repeat;background-size:100% 100%;z-inde:9999;"></div>`;
  //添加点标记，并使用自己的icon
  new AMap.Marker({
    map: map,
    position: map.getCenter(),
    content: content,
    offset: new AMap.Pixel(0, 0),
    zIndex:200,
    label:{
      content:'当前位置',
      offset: new AMap.Pixel(-15, -22),
    }
  });
  AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],()=>{
    map.addControl(new AMap.ToolBar());

    map.addControl(new AMap.Scale());

    map.addControl(new AMap.OverView({isOpen:true}));
  });
  return map;
}
function placeSearchByName(placename,city, map,callback){
  const placeSearch = new AMap.PlaceSearch({city:city,extensions:'all'});
  placeSearch.search(placename,(status, result)=>{
    if (status=='complete') {
      callback(result);
    }else if(status=='error'){
      alert(result);
    }else {
      // alert('未找到相关位置');
    }

  })
}
function getGeolocation(onComplete=()=>{},onError=()=>{}){
  const mapObj = new AMap.Map('iCenter');
  mapObj.plugin('AMap.Geolocation', ()=>{
    const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    });
    mapObj.addControl(geolocation);
    geolocation.getCurrentPosition();
    AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
    AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
  })

  // AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
  // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
}
function placeSearchByType(type,city, map,location, callback, maskClick=()=>{}, distance=1500000,zoom=14){
  const placeSearch = new AMap.PlaceSearch({city:city,extensions:'all',pageSize:10});
  const LngLat = location.split(',');
  console.log(type);
  placeSearch.searchNearBy(type, new AMap.LngLat(LngLat[0],LngLat[1]),distance,(status, result)=>{
    console.log(result);
    if (status=='complete') {
      setMarksToMap(result.poiList.pois, map, maskClick);
      map&&map.setZoomAndCenter(zoom,   map.getCenter());
      callback(result);
    }else if(status=='error'){
      alert(result);
    }else if (status=='no_data') {
      callback(result);
      // debugger;
      // placeSearchByType(type,city, map,location, callback, maskClick=()=>{}, distance+5000, zoom-2);
    }else {
      alert(result);
    }

  })
}
function setMarksToMap(marks, map, marksClick=()=>{}){
 // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
 marks.forEach(function(marker,index) {
   const content= `<div classname="map-marsk" style="width:30px;height:45px;background: url('./images/community/btn_fixed_position_seletced.png') no-repeat;background-size:100% 100%;color:white;text-align:center;line-height:24px;">${index+1}</div>`;
   let mapMarker = new AMap.Marker({
     map: map,
     content: content,
     position: [marker.location.lng,marker.location.lat],
     offset: new AMap.Pixel(0, 0)
   });
   AMap.event.addListener(mapMarker, 'click', (e)=>{
     // marksClick(e,marker.position[2]);
     const placeSearch = new AMap.PlaceSearch({extensions:'all',autoFitView:true});
     placeSearch.getDetails(marker.id,(status, result)=>{
       if (status=='complete') {
         marksClick(e,result);
         map&&map.setZoomAndCenter(18, [marker.location.lng,marker.location.lat]);
       }else if(status=='error'){
         alert(result);
       }else {
         alert('未找到相关位置');
       }

     })

   });
 });
}

export {
  getMap,
  placeSearchByName,
  placeSearchByType,
  setMarksToMap,
  getGeolocation
}
