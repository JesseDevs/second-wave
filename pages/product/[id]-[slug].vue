<template>
	<detail-page>
		<ProductDetail :product="product" />

		<ProductMessageForm v-if="user" :userEmail="user.email" />
		<div class="login" v-else>
			<NuxtLink to="/login">
				Login to contact seller <Icon name="ic:outline-arrow-right-alt" size="21"
			/></NuxtLink>
		</div>
	</detail-page>
</template>

<script setup>
	const user = useSupabaseUser();
	const route = useRoute();
	const { capitalizeWords } = useUtilities();

	const { data: product } = await useFetchProduct(route.params.id);

	useHead({
		title: capitalizeWords(route.params.slug),
	});
</script>

<style lang="scss" scoped>
	div.login {
		padding-top: 5rem;
		a {
			&:hover {
				text-decoration: underline;
			}
		}
	}

	product-extras {
		display: flex;
		flex-direction: column;
		padding-top: 2rem;
	}
</style>
