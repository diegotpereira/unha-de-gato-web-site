<template>
	<section class="section">
		<div class="container">
			<h2 class="title is-size-3-mobile is-2 has-text-left-mobile has-text-centered"> {{ title }}</h2>
			<div class="columns is-multiline">
				<div
				v-for="produto in produtos"
				v-bind:key="produto.slug"
				class="column is-half-tablet is-one-quarter-desktop">
				<ProdutoCard :produto="produto" />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import ProdutoCard from '@/components/ProdutoCard.vue'
export default {
	name: 'RecursoProdutos',
	props: {
		produtos: {
			type: Array
		},
		title: {
			type: String
		}
	},
	components: {
		ProdutoCard
	}
}
</script>
<!-- Adicione o atributo "scoped" para limitar o CSS apenas a este componente -->	
<style scoped lang="scss">
.section {
  padding: 4rem 1.5rem;
}
</style>