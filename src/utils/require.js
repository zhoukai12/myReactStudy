import axios from 'axios';
// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = 'https://www.baidu.com';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = 'https://www.ceshi.com';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'https://www.production.com';
// } 

const service = axios.create({
    baseURL: 'http://localhost:3000', // api 的 base_url
    withCredentials: true, // 跨域请求时发送 cookies
    timeout: 5000 // request timeout
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const store={}

/**
 * 拦截器后面配置
 */

// 请求拦截器
service.interceptors.request.use(    
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token||'';        
        // token && (config.headers.Authorization = token);        
        return config;    
    },    
    error => {        
        return Promise.error(error);    
    })

// 响应拦截器
service.interceptors.response.use(    
    response => {        
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },
    // 服务器状态码不是200的情况    
    error => {        
        return Promise.reject(error);     
    }
);




/*service.interceptors.request.use((config) => {
    let token = store.get('token') || '';
    if (config.params && !config.params.noToken) {
        Object.assign(config.params || {}, {
            token
        })
    }
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});
service.interceptors.response.use((resp) => {
    const { code, msg } = resp.data.err;
    if (code !== 0) {
        Message({
            message: msg,
            type: 'error',
            duration: 3 * 1000
        })
        if (code === -100) {
            $store.commit("SET_TOKEN", null);
            $store.commit("SET_USER", null);
        }
    }
    return resp;

}, (error) => {
    return Promise.reject(error);
});*/

export default service;