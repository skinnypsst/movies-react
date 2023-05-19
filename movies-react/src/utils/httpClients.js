const API = process.env.REACT_APP_API;
const APi_TOKEN = process.env.REACT_APP_API_TOKEN;

export function get(path){
   return fetch(API + path,{
        headers: {
            Authorization: 'Bearer' + APi_TOKEN ,
            'Content-Type': 'application/json; charset=utf-8',
        },

    }).then((result) => result.json());

}