import { defineStore } from "pinia";
import { getClient } from "@/utils/mqttAPI";
import { disconnectClient } from "../utils/mqttAPI";

export const clientStore = defineStore('clients', {
  state: () => ({
    clients: [],
    loading: false,
    clientidlist:[]
  }),
  getters: {
    ClientIDList(){
      const list = [];
      console.log(this.clients.length);
      for(let i = 0; i < this.clients.length; ++i){
        // list.push(this.clients[i]);
      }
      console.log(list);
    },
  },
  actions: {
    ClientCopy(raw){
      const allowed = [
        'clientid',
        'connected',
        'connected_at',
        'ip_address',
        'subscriptions_cnt'
      ];
      const filtered = Object.keys(raw)
        .filter(key => allowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = raw[key];
          return obj;
        }, {});
      return filtered;
    },

    async initClientList(){
      this.loading = true;
      this.clients = [];
      this.clientidlist = [];
      getClient().then((res) => {
        const list = res.data.data;
        for(let i = 0; i < list.length; ++i){
          this.clients.push(this.ClientCopy(list[i]));
          this.clientidlist.push(list[i].clientid);
        }
        console.log(this.clientidlist);
        this.loading = false;
      })
    },

    //TODO:disConnectClient
    disConnectClient(clientID){
      return disconnectClient(clientID); //直接修改connected属性 不重新渲染列表
      // return this.initClientList(); //重新init前端页面会闪烁，视觉效果不好
    }

  }
})