<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-square has-background-white-ter">
				<router-link 
				:to="produtoUrl"
				@click.native="salvarAtualProduto(produto)"
				tag="img"
				:src="produtoImg">
				</router-link>
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<router-link 
				:to="produtoUrl"
				@click.native="salvarAtualProduto(produto)">
					<h3 class="is-size-6"> {{produto.titulo}} </h3>
				</router-link>
				<p class="title is-size-2 has-text-weight-bold is-marginless">
					{{produto.preco}}
				</p>
				<p v-if="produto.inventario" class="is-size-7">
					<span class="icon">
						<check-icon class="has-text-primary" />
					</span>
					<span>Em estoque</span>
				</p>
				<p v-else class="is-size-7">
					<span class="icon">
						<cart-off-icon class="has-text-danger" />
					</span>
					<span>Temporariamente fora de estoque</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import CartOffIcon from 'vue-material-design-icons/CartOff.vue';
import CheckIcon from 'vue-material-design-icons/CheckCircle.vue';

export default {
	name: 'ProdutoCard',
	props: {
		produto: {
			type: Object
		}
	},
	data() {
		return {
			hover: false
		}
	},
	components: {
		CartOffIcon,
		CheckIcon
	},
	computed: {
		produtoUrl() {
			return '/produtos/' + this.produto.slug
		},
		produtoImg() {
			return require('@/assets/imagens/produtos/transparente/' +
			this.produto.image[1])
		}
	},
	methods: {
		salvarAtualProduto(produto) {
			this.$store.commit('salvarAtualProduto', produto)
		}
	}
}
</script>
<style scoped lang="scss">
.card {
    box-shadow: none !important;
    .card-image {
        cursor: pointer;
    }
    .card-content {
        padding: 1.5rem 0;
        .content h3 {
            margin-bottom: 0.3rem;
        }
    }
}
</style>