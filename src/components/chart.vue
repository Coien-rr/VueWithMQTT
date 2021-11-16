<script setup>
	import { Message } from '@arco-design/web-vue';
	const form = {
		host: '',
		port: ''
	}
  // import mqtt from 'mqtt';
  const store = {
    title: 'Hello World!',
		connection:{
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
  }

  function createConnection(){
    const { host, port, endpoint, ...options } = store.connection;
		const connectUrl = `ws://${host}:${port}${endpoint}`;
		try {
			store.client = mqtt.connect(connectUrl, options);
		} catch (error) {
			console.log('mqtt.connect error', error);
		}
				
		store.client.on('connect', () => {
			console.log('Connection successed!');
			Message.success('Connection successed!');
		})
		store.client.on('error', error => {
			console.log('Connection failed', error);
		})
		store.client.on('message', (topic, message) => {
		  store.receiveNews = store.receiveNews.concat(message);
			console.log(`Received message ${message} from topic ${topic}`);
			message = JSON.parse(message);
			// console.log(message.msg)
			store.title = message.msg;
		})
  }

  function doSubscribe() {
    const { topic, qos } = store.subscription;
    store.client.subscribe(topic, { qos }, (error, res) => {
      if (error) {
        console.log('Subscribe to topics error', error);
        return;
      }
      store.subscribeSuccess = true;
      console.log('Subscribe to topics res', res);
      });
  }
  
  function doPublish() {
    const { topic, qos, payload } = store.publish
    store.client.publish(topic, payload, qos, error => {
      if (error) {
        console.log('Publish error', error)
      }
    })
  }

	function destroyConnection() {
		if (store.client.connected) {
			try {
				store.client.end();
				store.client = {
					connected: false,
				};
				console.log('Successfully disconnected!');
				Message.info('Successfully disconnected!');
			} catch (error) {
				console.log('Disconnect failed', error.toString());
			}
		}
	}

  function publish(){
    setInterval(() => {
      doPublish();
    }, 1000);
  }

  function call(){
    console.log(store);
  }

</script>

<template>
  <main>
    <h1>Hello</h1>
    <a-space>
      <a-button @click="call()" type="primary">Primary</a-button>
      <a-button @click="createConnection()" type="primary">connect</a-button>
      <a-button @click="doSubscribe()" type="primary">subscribe</a-button>
      <a-button @click="publish()" type="primary">Publish</a-button>
			<a-alert type="success">This is an info alert.</a-alert>
    </a-space>
		
			<div class="configuration" :style="{ display: 'flex' }">
				<a-card :style="{ width: '100%' }" title="Configuration">
					<a-space direction="inline" size="large">
						<a-form :model="form">
							<a-row :gutter = "20">
								<a-col :span = "8">
									<a-form-item label="Host">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="store.connection.host" placeholder="please enter Host..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="Port">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="store.connection.port" placeholder="please enter Port..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="Mountpoint">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="store.connection.endpoint" placeholder="please enter Mountpoint..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="ClientID">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="store.connection.clientId" placeholder="please enter ClientID..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="Username">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="store.connection.username" placeholder="please enter Username..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="Password">
										<a-input-password :style="{width:'400px'}" size = 'large' field = name v-model="store.connection.password" placeholder="please enter Password..." />
									</a-form-item>
								</a-col>
							</a-row>
							<a-row class="buttons">
								<a-button @click="createConnection()" shape="round" type="primary" style="margin-right: 20px; " size="large">connect</a-button>
								<a-button @click="destroyConnection()" shape="round" type="primary" status="danger" size="large">disconnect</a-button>
							</a-row>
						</a-form>
					</a-space>
				</a-card>
  	</div>
  </main>  
</template>


<style scoped>
  main{
    position: fixed;
    top: 130px;
    left: 13rem;
		padding: 20px;
  }
	main .configuration {
		margin-top: 30px;
	} 

	main .buttons{
		margin-top: 15px;
		display: flex;
		justify-content: flex-end;
		margin-right: 20px;
	}


</style>
