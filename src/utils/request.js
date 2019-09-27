//封装一个axios的实例
import axios from "axios"
import {serverHost,port} from "../config"
//创建一个新的实例
let req = axios.create({
    baseURL: `${serverHost}:${port}`
});

let request = function(url = "", options = {}){
    return function(){
        if(!url){
            return Promise.reject("必须传递url");
        }
        //返回promise对象
        return req({
            url,
            ...options
        });
    }
};
export default request;