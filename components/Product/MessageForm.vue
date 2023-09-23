<script setup>
	const route = useRoute();
	const message = ref({
		name: '',
		email: '',
		phone: '',
		text: '',
	});

	const errorMessage = ref('');
	const successMessage = ref('');

	const disableButton = computed(() => {
		for (let key in message.value) {
			if (!message.value[key]) return true;
		}
		return false;
	});

	const onSubmit = async () => {
		try {
			const response = await $fetch(`/api/car/listings/${route.params.id}/message`, {
				method: 'post',
				body: message.value,
			});
			message.value = ref({
				name: '',
				email: '',
				phone: '',
				text: '',
			});
			successMessage.value = 'Message Sent';
			errorMessage.value = '';
		} catch (err) {
			errorMessage.value = err.statusMessage;
			successMessage.value = '';
		}
	};
</script>

<template>
	<card-contact>
		<form action="" @submit.prevent="onSubmit">
			<input v-model="message.name" type="text" placeholder="Name" />
			<input v-model="message.email" type="text" placeholder="Email" />
			<input v-model="message.phone" type="text" placeholder="Phone" />
			<textarea v-model="message.text" placeholder="Message"></textarea>
			<button :disabled="disableButton">Submit</button>
		</form>
		<p v-if="errorMessage">{{ errorMessage }}</p>
		<p v-if="successMessage">{{ successMessage }}</p>
	</card-contact>
</template>

<style lang="scss" scoped></style>
