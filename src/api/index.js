import http from '../utils/http'
export const getHomeData = ()=> http({url:'/home',data:111})
export const getCategoryData = ()=> http({url:'/category',data:111})
export const remderImgData = ()=> http({url:'/remderImg',data:111})
export const recommendData = ()=> http({url:'/recommend',data:111})