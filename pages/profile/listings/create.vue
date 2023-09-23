<template>
	<create-page>
		<h1>Create a New Listing</h1>
		<form action="" @submit.prevent="handleSubmit">
			<AddInput
				v-for="input in inputs"
				:key="input.id"
				:title="input.title"
				:name="input.name"
				:placeholder="input.placeholder"
				@change-input="onChangeInput"
			/>
			<AddSelect title="Size *" :options="sizes" name="size" @change-input="onChangeInput" />

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

			<AddTextarea
				title="Description *"
				name="description"
				placeholder="..."
				@change-input="onChangeInput"
			/>
			<AddImage @change-input="onChangeInput" />

			<button :disabled="isButtonDisabled">Submit</button>
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

	const typesOfClothing = ['Tops', 'Bottoms', 'Outerwear', 'Jackets', 'Accessories', 'Swim'];

	const genders = ['Men', 'Woman'];

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
			title: 'Price',
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

<style lang="scss" scoped>
	create-page {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
	}
</style>
