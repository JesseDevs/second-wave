<template>
	<div>
		<NuxtLayout>
			<div>
				<h1>ERROR BUDDY {{ error.statusCode }}</h1>
				<p>{{ error.message }}</p>
				<button @click="handleReturnHome">Go Home</button>
			</div>
		</NuxtLayout>
	</div>
</template>

<script setup>
	const handleReturnHome = () => {
		clearError({
			redirect: '/',
		});
	};

	const error = useError();
</script>

<style lang="scss" scoped>
	div {
		display: flex;
		min-height: 70vh;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	h1 {
		font-size: 10vh;
		text-align: center;
	}

	button {
		display: block;
		appearance: none;
		outline: none;
		border: 2px solid dodgerblue;
		font-weight: 600;
		background-color: dodgerblue;
		padding: 10px 20px;
		margin-top: 20px;
		cursor: pointer;
		color: white;
	}
</style>
