import {request,request2} from './request';
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(page,type){
  return request2({
    // http://152.136.185.210:7878/api/m5/home/data?type=pop&page=1
    // 35403523
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}