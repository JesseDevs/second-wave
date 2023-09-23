<template>
	<ad-selection>
		<label for="">{{ title }}</label>
		<select name="" id="" @change="onChange" v-model="state">
			<option v-for="option in options" :key="option.id" :value="option">
				{{ option }}
			</option>
		</select>
	</ad-selection>
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

<style lang="scss" scoped>
	ad-selection {
		display: block;
		width: 100%;
		label {
			margin-bottom: 0.25rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
		}

		select {
			padding: 0.5rem;
			border-radius: 0.25rem;
			border-width: 1px;
		}
	}
</style>
