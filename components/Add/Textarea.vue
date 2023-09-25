<template>
	<form-field>
		<label for="">{{ title }}</label>
		<textarea
			type="text"
			:placeholder="placeholder"
			v-model="state"
			:name="name"
			@input="onChange"
		/>
	</form-field>
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

<style lang="scss" scoped></style>
