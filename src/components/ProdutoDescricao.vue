<template>
	<div class="content product-description">
		<h3 class="title is-5">Descrição do produto</h3>
		<p>{{ produto.descricao }}</p>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
	name: 'ProdutoDescricao',
	components: {
		...mapGetters({
			produto: 'getAtualProduto'
		})
	}
}
</script>

<style lang="scss">
.product-description {
	margin-top: 2rem;
	.title.is-5 {
		margin-bottom: 0.25rem;
	}
}

@media screen and (min-width: 768px) {
	.product-description {
		margin-top: 3rem;
	}
}
</style>
