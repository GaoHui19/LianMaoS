// axios二次封装
import axios from 'axios';
import { showDialog } from 'vant';
const instance = axios.create({
    // baseURL: import.meta.env === 'production'?'http://seec4.com':'http://127.0.0.1:80',
    baseURL: 'https://lianmall.usemock.com',
    timeout: 10000,//十秒 超时时间
    method:"POST"
    // headers: {'X-Custom-Header': 'foobar'} 
    
  });

  instance.interceptors.request.use(function(config){
    config.headers = {
        'X-Ayth-Token':sessionStorage.getItem('token')
    }
    return config
  },function(error){
    showDialog({message:error.message})
  })
  instance.interceptors.response.use(function(res){
    // if(res.status===200){
    //     if(res.data.code === 20001){
    //         return res.data;
    //     }else if(res.status === 
    //         401){
    //         router.push('/login')
    //     }else{
    //         showDialog({message:res.data.message})
    //     }
    // }else{
    //     showDialog({message:'请求出错'})
    // }
    return res.data
  },function(error){
    showDialog({message:error.message})
  })
  export default instance