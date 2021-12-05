import axios from "axios";

export function myAxios(axiosConfig){
  const service = axios.create({
    baseURL: '/mqtt',
    timeout: '10000',
    headers: {
      Authorization: 'Basic YWRtaW46cHVibGlj',
      'Content-type': 'application/json',
    },
  })
  return service(axiosConfig);
}

export function qfwAxios(axiosConfig){
  const service = axios.create({
    baseURL: '/qwf',
    timeout: '10000',
    headers:{
      'Content-type': 'application/json',
    }
  })
  return service(axiosConfig);
}

// export {myAxios, qfwAxios};
// export default myAxios;

// export default qfwAxios;