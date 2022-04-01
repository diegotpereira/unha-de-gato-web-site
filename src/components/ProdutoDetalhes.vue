<template>
	<div class="product-details">
		<h2 class="title is-3">{{ produto.titulo }}</h2>

		<p class="title price">{{ produto.preco }}</p>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name: 'ProdutoDetalhes',
	data() {
		return {
			
		}
	},
	computed: {
		...mapGetters({
			produto: 'getAtualProduto'
		})
	}
}
</script>
<style lang="scss">
.product-details {
	margin-bottom: 1rem;

	.title.is-3 {
		margin-bottom: 0.25rem;
	}

	.price {
		font-size: 4rem;
	}

	.title.is-5 {
		margin-bottom: 0.2rem;
	}

	.material-design-icon.icon-2x {
		height: 1.5em;
		width: 1.5em;
		line-height: 1;
		margin-right: 0.1rem;
	}

	.material-design-icon.icon-2x > .material-design-icon__svg {
		height: 1.5em;
		width: 1.5em;
		line-height: 1;
	}
}
</style>