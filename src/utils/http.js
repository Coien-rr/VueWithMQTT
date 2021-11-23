import axios from "axios";

function myAxios(axiosConfig){
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

export default myAxios;