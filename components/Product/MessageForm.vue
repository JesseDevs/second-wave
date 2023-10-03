<script setup>
	const props = defineProps({
		userEmail: String,
	});
	const route = useRoute();
	const message = ref({
		name: '',
		email: props.userEmail,
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
		console.log(message.value);
		try {
			const response = await $fetch(`/api/product/listings/${route.params.id}/message`, {
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
	<card-contact id="contact-seller">
		<section-header>
			<div class="line"></div>
			<h2 class="strict-voice">Contact Seller</h2>
		</section-header>
		<form action="" @submit.prevent="onSubmit">
			<input v-model="message.name" type="text" placeholder="Name" />

			<input v-model="message.email" type="email" :placeholder="userEmail" disabled />

			<input
				v-model="message.phone"
				type="text"
				placeholder="Phone"
				maxlength="10"
				pattern="[1-9]{1}[0-9]{9}"
			/>
			<textarea v-model="message.text" placeholder="Message"></textarea>
			<Button30 :disabled="disableButton">Submit</Button30>
		</form>
		<p v-if="errorMessage">{{ errorMessage }}</p>
		<p v-if="successMessage">{{ successMessage }}</p>
	</card-contact>
</template>

<style lang="scss" scoped>
	card-contact {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 5rem;

		form {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			max-width: 500px;

			input,
			textarea {
				padding: 1.5rem;
				resize: none;
				border: none;
				outline: none;
				border-radius: 0.25rem;
				font-family: 'JetBrains Mono', monospace;
			}

			input:disabled {
				background-color: rgb(143, 139, 139);
			}

			textarea {
				min-height: 150px;
			}

			@media (min-width: 700px) {
				display: grid;
				grid-template-columns: repeat(3, minmax(0, 1fr));
				max-width: 900px;
				textarea {
					grid-column: 1/-1;
				}
			}

			@media (min-width: 930px) {
				padding-left: 3rem;
			}
		}
	}
	section-header {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		width: 100%;
		gap: 1.2rem;
		margin-bottom: 3.4rem;
		h2 {
			flex-shrink: 0;
		}

		.line {
			width: 100%;
			height: 1.2px;
			background-color: gray;
		}
	}
</style>
