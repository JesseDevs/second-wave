<template>
	<form-field>
		<label for="image">Image</label>
		<input type="file" name="image" id="" accept="image/*" @change="onImageUpload" />

		<aside v-if="image.preview">
			<picture>
				<NuxtImg :src="image.preview" alt="image-upload-preview" />
			</picture>
		</aside>
	</form-field>
</template>

<script setup>
	const image = useState('productImage', () => {
		return {
			preview: null,
			image: null,
		};
	});

	const onImageUpload = (event) => {
		const input = event.target;
		if (input.files) {
			const reader = new FileReader();
			reader.onload = (e) => {
				image.value.preview = e.target.result;
			};
			image.value.image = input.files[0];
			reader.readAsDataURL(input.files[0]);
			emits('changeInput', input.files[0], 'image');
		}
	};

	const emits = defineEmits(['changeInput']);
</script>

<style lang="scss" scoped>
	input {
		background-color: red;
	}
</style>
