import { defineStore } from "pinia";
import { getsubscription } from "@/utils/mqttAPI";

export const subscriptionStore = defineStore('subscriptions', {
  state: () => ({
    subscriptions: [],
    loading: false
  }),
  getters: {},
  actions: {
    initSubscriptionList(){
      this.loading = true;
      this.subscriptions = [],
      getsubscription().then(res => {
        // console.log(res.data);
        const list = res.data.data;
        for(let i = 0; i < list.length; ++i){
          this.subscriptions.push(list[i]);
        }
        this.loading = false;
        // console.log(this.subscriptions);
      })
    }
  }
})