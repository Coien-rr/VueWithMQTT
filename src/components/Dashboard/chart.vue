<script setup>
  import Content from '@/components/content.vue';
	import { useConfigStore } from '@/store/config';

	const Config = useConfigStore();

  function publish(){
    setInterval(() => {
      Config.doPublish();
    }, 1000);
  }

  function call(){
    console.log(store);
  }

</script>

<template>
  <main>
		<Content/>
		<!-- //TODO: v-for重构代码 -->
		<div class="configuration" :style="{ display: 'flex' }">
				<a-card :style="{ width: '100%' }" title="Configuration">
					<a-space direction="inline" size="large">
						<a-form :model="form">
							<a-row :gutter = "20">
								<a-col :span = "8">
									<a-form-item label="Host">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="Config.connection.host" placeholder="please enter Host..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="Port">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="Config.connection.port" placeholder="please enter Port..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="Mountpoint">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="Config.connection.endpoint" placeholder="please enter Mountpoint..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="ClientID">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="Config.connection.clientId" placeholder="please enter ClientID..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="Username">
										<a-input :style="{width:'400px'}" size = 'large' field = name v-model="Config.connection.username" placeholder="please enter Username..." />
									</a-form-item>
								</a-col>
								<a-col :span = "8">
									<a-form-item label="Password">
										<a-input-password :style="{width:'400px'}" size = 'large' field = name v-model="Config.connection.password" placeholder="please enter Password..." />
									</a-form-item>
								</a-col>
							</a-row>
							<a-row class="buttons">
								<a-button @click="Config.createConnection()" shape="round" type="primary" style="margin-right: 20px; " size="large">Connect</a-button>
								<a-button @click="Config.destroyConnection()" shape="round" type="primary" status="danger" size="large">Disconnect</a-button>
							</a-row>
						</a-form>
					</a-space>
				</a-card>
  	</div>

		<div class="ap">
			<div class="subscribe" :style="{ display: 'flex' }">
				<a-card :style="{ width: '600px' }" style="height: 240px;" title="Subscribe">
					<a-form>
						<a-cow>
							<a-col :span = "22">
								<a-form-item label="Topic">
									<a-input v-model="Config.subscription.topic" placeholder="please enter Topic..." />
								</a-form-item>
							</a-col>
							<a-col :span = "22">
								<a-form-item label="Qos">
									<a-input v-model="Config.subscription.qos" placeholder="please enter Qos..." />
								</a-form-item>
							</a-col>
						</a-cow>
						<a-row>
							<a-col>
								<a-row class="buttons">
									<a-button @click="Config.doSubscribe()" shape="round" type="primary" status = "success" style="margin-right: 20px; " size="large">Subscribe</a-button>
									<a-button shape="round" type="primary" status="danger" size="large">unSubscribe</a-button>
								</a-row>
							</a-col>
						</a-row>
					</a-form>
				</a-card>
			</div>

			<div class="publish" :style="{ display: 'flex'}">
				<a-card :style="{ width: '600px' }" title="Publish">
					<a-form>
						<a-cow>
							<a-col :span = "22">
								<a-form-item label="Topic">
									<a-input v-model="Config.publish.topic" placeholder="please enter Topic..." />
								</a-form-item>
							</a-col>
							<a-col :span = "22">
								<a-form-item label="Payload">
									<a-input v-model="Config.publish.qos" placeholder="please enter Payload..." />
								</a-form-item>
							</a-col>
							<a-col :span = "22">
								<a-form-item label="QoS">
									<a-input v-model="Config.publish.payload" placeholder="please enter QoS..." />
								</a-form-item>
							</a-col>
						</a-cow>
						<a-row>
							<a-col>
								<a-row class="buttons">
									<a-button @click="Config.doPublish()" shape="round" type="primary" status = "success" style="margin-right: 20px; " size="large">Publish</a-button>
								</a-row>
							</a-col>
						</a-row>
					</a-form>
				</a-card>
			</div>
		</div>
		
  </main>  
</template>


<style scoped>
  main{
    position: fixed;
    left: 13rem;
  }
	main .configuration {
		margin-top: 100px;
		padding: 20px;
	} 

	main .subscribe,
	main .publish {
		margin-top: 30px;
	}

	main .buttons{
		margin-top: 15px;
		display: flex;
		justify-content: flex-end;
		margin-right: 20px;
		margin-bottom: 10px;
	}

	main .subscribe .buttons {
		display: flex;
		flex-wrap: wrap;
	}

	main .subscribe .buttons,
	main .publish .buttons{
		margin-top: 5px;
		margin-bottom: 5px;
		justify-content: center;
		/* margin-right: 40px; */
	}

	main .ap{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		box-sizing: border-box;
	}

	main div{
		border-radius: 10px;
	}


</style>
