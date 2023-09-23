<template>
	<ad-input>
		<label for="">{{ title }}</label>
		<input
			type="text"
			:placeholder="placeholder"
			v-model="state"
			:name="name"
			@input="onChange"
		/>
	</ad-input>
</template>

<script setup>
	const props = defineProps({
		title: String,
		name: String,
		placeholder: String,
	});

	const emit = defineEmits(['changeInput']);
	const state = ref('');
	const onChange = () => {
		emit('changeInput', state.value, props.name);
	};
</script>

<style lang="scss" scoped>
	ad-input {
		display: block;
		width: 100%;
		label {
			margin-bottom: 0.25rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
		}

		input {
			padding: 2rem;
			border-radius: 0.25rem;
			border-width: 1px;
		}
	}
</style>
