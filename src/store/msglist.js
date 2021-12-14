import { defineStore } from "pinia";

export const useMsglistStore = defineStore('msglist', {
  state: () => ({
    /** @type { clientid: string } */
    clientid: '',
    /** @type {{ deviceID: string, id: data, topic: string }[]} */
    msglist: []
  }),

  getters: {

  },
  
  actions: {
    addMsgList(msg){
      console.log(msg);
      this.msglist.push(msg);
      console.log(this.msglist);
    }
  }
})