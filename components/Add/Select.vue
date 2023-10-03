<template>
	<form-field>
		<label for="">{{ title }}</label>
		<select name="" id="" @change="onChange" v-model="state">
			<option disabled selected value="">Select</option>
			<option v-for="option in options" :key="option.id" :value="option">
				{{ option }}
			</option>
		</select>
	</form-field>
</template>

<script setup>
	const props = defineProps({
		title: String,
		name: String,
		options: Array,
	});

	const emit = defineEmits(['changeInput']);
	const state = ref('');
	const onChange = () => {
		emit('changeInput', state.value, props.name);
	};
</script>

<style lang="scss" scoped></style>
