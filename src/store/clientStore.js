import { defineStore } from "pinia";
import { getClient } from "@/utils/mqttAPI";

export const clientStore = defineStore('clients', {
  state: () => ({
    clients: [],
  }),
  getters: {},
  actions: {
    ClientCopy(raw){
      const allowed = [
        'clientid',
        'connected',
        'connected_at',
        'ip_address'
      ];
      const filtered = Object.keys(raw)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});
      return filtered;
    },
    initClientList(){
      this.clients = [],
      getClient().then((res) => {
        const list = res.data.data;
        // console.log(list);
        for(let i = 0; i < list.length; ++i){
          // console.log(this.ClientCopy(list[i]));
          this.clients.push(this.ClientCopy(list[i]));
        }
        console.log(this.clients);
      })
    }
  }
})