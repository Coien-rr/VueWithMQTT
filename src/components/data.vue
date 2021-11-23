<script setup>
import { clientStore } from '@/store/clientStore';
const clientList = clientStore();
</script>

<template>
	<main>
		<h1>Hello Data</h1>
		<a-space>
			<a-button @click="clientList.initClientList()" type="primary">Get</a-button>
		</a-space>
	</main>
</template>

<style scoped>
main {
	position: fixed;
	top: 130px;
	left: 13rem;
	padding: 20px;
}
</style>
