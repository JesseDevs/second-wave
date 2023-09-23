<template>
	<ad-image>
		<label for="">Image</label>
		<form-field>
			<input type="file" name="" id="" accept="image/*" @change="onImageUpload" />
			<span>Browse File</span>
		</form-field>
		<article v-if="image.preview">
			<picture>
				<NuxtImg :src="image.preview" alt="image-upload-preview" />
			</picture>
		</article>
	</ad-image>
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
	ad-image {
		display: block;
		width: 100%;
		label {
			margin-bottom: 0.25rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
		}

		form {
			padding: 2rem;

			input {
				position: absolute;
				opacity: 0;
				cursor: pointer;
			}
			span {
				cursor: pointer;
			}
		}
	}

	form-field {
		display: block;
		width: 100%;
		position: relative;
	}
</style>
