import { qfwAxios } from './http';

export function loginMqtt(form){
  return qfwAxios({
    url: '/loginMQTT',
    method: 'post',
    data: form
  });
}