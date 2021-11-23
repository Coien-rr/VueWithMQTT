import myAxios from "./http";

export function getClient(){
  return myAxios({
    url: '/clients',
    method: 'get',
  });
}