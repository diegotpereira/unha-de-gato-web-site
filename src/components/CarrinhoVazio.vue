<template>
	<div class="columns">
		<div class="column is-full has-text-centered">
			<figure class="image is128x128 is-inline-flex empty-cart">
				<img src="@/assets/empty-cart.svg" />
			</figure>
			<p class="content is-medium">Seu carrinho de compras está vazio - mas não precisa estar.</p>
			<p class="content">
				<router-link to="/produtos" class="button.is-text">Continue comprando</router-link>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CarrinhoVazio'
}
</script>

<style lang="scss" scoped>
.empty-cart {
	margin-bottom: 1.5rem
}
</style>