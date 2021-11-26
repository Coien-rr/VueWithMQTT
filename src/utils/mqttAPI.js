import myAxios from "./http";

export function getClient(){
  return myAxios({
    url: '/clients',
    method: 'get',
  });
}

export function disconnectClient(clientID){
  return myAxios({
    url:`/clients/${clientID}`,
    method: 'delete',
  })
}