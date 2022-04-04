<template>
	<div class="product-details">
		<h2 class="title is-3">{{ produto.titulo }}</h2>
		<Rating 
		class="icon-2x has-text-primary"
		v-for="index in produto.avaliacao"
		:key="index"
		/>
		<p class="title price">{{ produto.preco }}</p>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Rating from 'vue-material-design-icons/Star.vue';
export default {
	name: 'ProdutoDetalhes',
	components: {
		Rating
	},
	data() {
		return {
			restantes: 0
		}
	},
	created() {
		this.restantes = 5 - this.produto.avaliacao
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