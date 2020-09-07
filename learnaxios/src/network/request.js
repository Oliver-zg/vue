import axios from "axios";

export function request(config) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //创建拦截器
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  },err => {
    console.log(err)
  })
  return instance(config)

  /* const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance(config)
  .then(res => {
    success(res)
  }
  ).catch(err => {
    error(err)
  }) */
 /*  return new Promise((resolve,reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    instance(config)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
    
  }) */

}