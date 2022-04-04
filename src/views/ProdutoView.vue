<template>
	<div>
		<HeroSubpagina :title="produto.title" subtitle />
		<section class="section">
			<div class="container">
				<Breadcrumbs
				to="/produtos"
				pagina="Produtos"
				:to-categoria="produtoUrl"
				:categoria="produto.categoria"
				:titulo="produto.titulo" />
				<div class="columns">
					<div class="column is-half">
						<figure class="image is-square">
							<img :src="produtoImg" />
						</figure>
					</div>
					<div class="column is-two-fifths is-offset-1">
						<ProdutoDetalhes />
						<AddNoCarrinho @toggle="toggle" />
						<transition
						enter-active-class="animated fadeInDown"
						leave-active-class="animated fadeOutUp">
						
						</transition>
						<ProdutoDescricao />
					</div>
				</div>
				<ArrowIcon />
				<router-link to="/produtos" class="is-size-7 has-text-grey">
					Voltar para todos os produtos
				</router-link>
			</div>
		</section>
	</div>
</template>
<script>
import HeroSubpagina from '@/components/HeroSubpagina.vue'
import { mapGetters } from 'vuex';
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import ProdutoDescricao from '@/components/ProdutoDescricao.vue'
import ArrowIcon from 'vue-material-design-icons/ArrowLeft.vue';
import ProdutoDetalhes from '@/components/ProdutoDetalhes.vue'
import AddNoCarrinho from '@/components/AddNoCarrinho.vue'

export default {
	name: 'ProdutoView',
	components: {
		HeroSubpagina,
		Breadcrumbs,
		ProdutoDescricao,
		ProdutoDetalhes,
		ArrowIcon,
		AddNoCarrinho
	},
	data() {
		return {
			message: 'Produto adicionado ao carrinho',
			notification: false
		}
	},
	computed: {
		...mapGetters({
			produto: 'getAtualProduto'	
		}),
		produtoImg() {
			return require('@/assets/imagens/produtos/' + this.produto.image[0])
		},
		produtoUrl() {
			return '/produtos?categoria=' + this.produto.categoria.toLowerCase()
		}
	},
	methods: {
		toggle() {
			this.notification = !this.notification
		}
	}
}
</script>

<style scoped lang="scss">
.notification {
	margin-top: 1rem;
}

.arrow-left-icon {
	margin-right: 0.5rem;
	line-height: 1;
}
</style>