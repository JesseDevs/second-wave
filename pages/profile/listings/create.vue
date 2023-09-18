<template>
	<create-page>
		<h1>Create a New Listing</h1>

		<div class="add-form">
			<select name="" id=""></select>
			<input type="text" />
			<textarea name="" id="" cols="30" rows="10"></textarea>
			<!-- <CarAdSelect
				title="Make *"
				:options="makes"
				name="make"
				@change-input="onChangeInput"
			/>

			<CarAdInput
				v-for="input in inputs"
				:key="input.id"
				:title="input.title"
				:name="input.name"
				:placeholder="input.placeholder"
				@change-input="onChangeInput"
			/>
			<CarAdTextarea
				title="Description *"
				name="description"
				placeholder=""
				@change-input="onChangeInput"
			/>
			<CarAdImage @change-input="onChangeInput" /> -->

			<button :disabled="isButtonDisabled" @click="handleSubmit">Submit</button>
		</div>

		<p v-if="errorMessage">{{ errorMessage }}</p>
	</create-page>
</template>

<script setup>
	const isButtonDisabled = computed(() => {
		for (let key in info.value) {
			if (!info.value[key]) {
				return true;
			} else {
				return false;
			}
		}
	});
</script>

<style lang="scss" scoped>
	create-page {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
	}
</style>
