import { Message } from "@arco-design/web-vue";
import { defineStore } from "pinia";

export const useConfigStore = defineStore('config', {
  state: () => ({
    title: 'Hello MQTTServer!',
    connection: {
      host: '101.34.225.32',
			port: '8083',
			endpoint: '/mqtt',
			clean: true, //保留回话
			connectTimeout: 4000, //超时时间
			reconnectPeriod: 4000 ,//重连时间间隔
			//认证信息
			clientId: 'mqttx_19220215',
			username: 'test',
			password: '123456',
    },
    subscription: {
			topic: 'callsub',
			qos: 0,
		},
		publish: {
			topic: 'topic/browser',
			qos: 0,
			payload: '{ "msg": "hello client!" }',
		},
		receiveNews: '',
		qosList:[
			{ label: 0, value: 0 },
			{ label: 1, value: 1 },
			{ label: 2, value: 2 },
		],
		client: {
			connected: false,
		},
		subscribeSuccess: false,
  }),

  getters: {

  },

  actions: {
    createConnection(){
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log('mqtt.connect error', error);
      }  
      this.client.on('connect', () => {
        console.log('Connection successed!');
        Message.success('Connection successed!');
      })
      this.client.on('error', error => {
        console.log('Connection failed', error);
      })
      this.client.on('message', (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message);
        console.log(`Received message ${message} from topic ${topic}`);
        message = JSON.parse(message);
        // console.log(message.msg)
        this.title = message.msg;
      })
    },

    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error);
          return;
        }
        this.subscribeSuccess = true;
        console.log('Subscribe to topics res', res);
        Message.success('Subscribe to topics res!')
        });
    },

    doPublish() {
      const { topic, qos, payload } = this.publish
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },

    destroyConnection() {
      if (this.client.connected) {
        try {
          this.client.end();
          this.client = {
            connected: false,
          };
          console.log('Successfully disconnected!');
          Message.info('Successfully disconnected!');
        } catch (error) {
          console.log('Disconnect failed', error.toString());
        }
      }
    }
  }
})