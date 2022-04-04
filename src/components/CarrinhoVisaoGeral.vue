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

		<CarrinhoDetalhes :soma="soma" />
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
		soma() {
			return this.produtos.reduce(
				(soma, produto) => soma + produto.preco * produto.quantidade, 0
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