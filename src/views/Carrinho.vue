<template>
	<div>
		<Hero title="seu carrinho de compras" subtitle />

		<section class="section">
			<div class="container">
				<CarrinhoVisaoGeral v-if="produtos.length" />
				<CarrinhoVazio v-else />
			</div>
		</section>
	</div>
</template>
<script>
import HeroSubpagina from '@/components/HeroSubpagina.vue'
import CarrinhoVisaoGeral from '@/components/CarrinhoVisaoGeral.vue'
import CarrinhoVazio from '@/components/CarrinhoVazio.vue'
import { mapGetters }  from 'vuex'
export default {
	name: 'Carrinho',
	components: {
		Hero: HeroSubpagina,
		CarrinhoVisaoGeral,
		CarrinhoVazio
	},
	computed: {
		...mapGetters({
			produtos: 'getCarrinhoCompras'
		})
	}
}
</script>
<style scoped lang="scss"></style>