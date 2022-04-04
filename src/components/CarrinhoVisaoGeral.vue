<template>
	<div class="columns">
		<div class="column is-7">
			<h2 class="title is-4">Carrinho de compras ({{ produtos.length }} bens)</h2>
			<CarrinhoItem 
				v-for="(produto, index) in produtos"
				v-bind:key="produto.titulo"
				:item="produto"
				:index="index" />
			<small>Os itens no carrinho de compras não são reservados.</small>
		</div>

		<CarrinhoDetalhes :sum="sum" />
	</div>
</template>
<script>
import CarrinhoItem from '@/components/CarrinhoItem.vue'
import CarrinhoDetalhes from '@/components/CarrinhoDetalhes.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'CarrinhoVisaoGeral',
	components: {
		CarrinhoItem,
		CarrinhoDetalhes
	},
	computed: {
		...mapGetters({
			produtos: 'getCarrinhoCompras'
		}),
		sum() {
			return this.produtos.reduce(
				(sum, produto) => sum + produto.preco * produto.quantidade, 0
			);
		}
	}
}
</script>
<style lang="scss">
article:last-of-type {
	margin-bottom: 2rem;
}
</style>