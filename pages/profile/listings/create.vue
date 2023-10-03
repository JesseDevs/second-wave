<template>
	<create-page>
		<h2 class="strict-voice">Create a New Listing</h2>
		<form action="" font-family="small-voice" @submit.prevent="handleSubmit">
			<AddInput
				v-for="input in inputs"
				:key="input.id"
				:title="input.title"
				:name="input.name"
				:placeholder="input.placeholder"
				@change-input="onChangeInput"
			/>

			<select-block>
				<AddSelect
					title="Size *"
					:options="sizes"
					name="size"
					@change-input="onChangeInput"
				/>
				<AddSelect
					title="Type *"
					:options="typesOfClothing"
					name="type"
					@change-input="onChangeInput"
				/>
				<AddSelect
					title="Gender *"
					:options="genders"
					name="gender"
					@change-input="onChangeInput"
				/>
			</select-block>

			<AddTextarea
				title="Description *"
				name="description"
				placeholder="..."
				@change-input="onChangeInput"
			/>
			<AddImage @change-input="onChangeInput" />

			<Button30 :disabled="isButtonDisabled">Submit</Button30>
		</form>

		<p v-if="errorMessage">{{ errorMessage }}</p>
	</create-page>
</template>

<script setup>
	const user = useSupabaseUser();
	const errorMessage = ref('');
	const supabase = useSupabaseClient();

	const info = useState('addInfo', () => {
		return {
			name: '',
			color: '',
			price: '',
			brand: '',
			type: '',
			size: '',
			gender: '',
			description: '',
			image: null,
		};
	});

	const onChangeInput = (data, name) => {
		info.value[name] = data;
	};

	const isButtonDisabled = computed(() => {
		for (let key in info.value) {
			if (!info.value[key]) {
				return true;
			} else {
				return false;
			}
		}
	});

	const sizes = ['3XS', 'XXS', 'XS', 'SML', 'MED', 'LRG', 'XL', 'XXL', '3XL', 'One Size'];

	const typesOfClothing = ['Shirts', 'Bottoms', 'Outerwear', 'Jackets', 'Accessories', 'Swim'];

	const genders = ['Men', 'Women'];

	const inputs = [
		{
			id: 1,
			title: 'Product Name *',
			name: 'name',
			placeholder: 'Nike Fleece Jacket',
		},
		{
			id: 2,
			title: 'Color *',
			name: 'color',
			placeholder: 'Orange',
		},
		{
			id: 3,
			title: 'Price *',
			name: 'price',
			placeholder: '0',
		},
		{
			id: 4,
			title: 'Brand *',
			name: 'brand',
			placeholder: 'Nike',
		},
	];

	const handleSubmit = async () => {
		const fileName = Math.floor(Math.random() * 123456700);
		const { data, error } = await supabase.storage
			.from('images')
			.upload('public/' + fileName, info.value.image);

		if (error) {
			return (errorMessage.value = 'Cannot upload image');
		}
		//post request
		const body = {
			...info.value,
			color: info.value.color.toLowerCase(),
			size: info.value.size.toLowerCase(),
			brand: info.value.brand.toLowerCase(),
			gender: info.value.gender.toLowerCase(),
			type: info.value.type.toLowerCase(),
			slug: info.value.name.toLowerCase().replace(/ /g, '-'),
			price: parseInt(info.value.price),
			listerId: user.value.id,
			image: data.path,
		};

		try {
			const response = await $fetch('/api/product/listings', {
				method: 'post',
				body,
			});

			navigateTo('/profile/listings');
		} catch (err) {
			errorMessage.value = err.statusMessage;
			await supabase.storage.from('images').remove(data.path);
		}
	};
</script>

<style lang="scss">
	create-page {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		font-size: var(--text-sm);

		form {
			display: grid;
			grid-template-columns: repeat(1, minmax(0, 1fr));
			row-gap: 2rem;
			* {
				font-size: inherit;
			}

			select-block {
				display: flex;
				width: 100%;
				gap: 1rem;

				form-field:nth-of-type(2) {
					flex-grow: 1;
					flex-shrink: 0;
					flex-basis: 40%;
				}
			}
		}
		form-field {
			display: flex;
			flex-direction: column;
			width: 100%;

			input,
			textarea,
			select {
				display: block;
				width: 100%;
				padding: 1.2rem;
				resize: none;
				border: none;
				outline: none;
				border-radius: 0.25rem;
				font-family: 'JetBrains Mono', monospace;
			}

			label {
				display: block;
				width: 100%;
				padding-bottom: 1rem;
			}

			textarea {
				min-height: 150px;
			}
		}

		h2 {
			margin-bottom: 3rem;
			padding-bottom: 5px;
			text-transform: uppercase;
			font-weight: 600;
			border-bottom: 1px solid var(--color-secondary-20);
		}

		select::-ms-expand {
			display: none; /* Remove default arrow for IE */
		}

		select {
			position: relative;
		}
		select::after {
			content: '\25BC'; /* Unicode character for down arrow */
			position: absolute;
			top: 50%;
			right: 10px;
			transform: translateY(-50%);
			/* Adjust font size of the arrow */
			font-size: 16px; /* Example font size */
			/* Adjust color of the arrow */
			color: #555; /* Example color */
			pointer-events: none;
		}
	}
</style>
