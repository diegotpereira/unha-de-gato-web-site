<template>
	<div>
		<Hero :title="title" :subtitle="subtitle" />
		<section class="section">
			<div class="container">
				<div class="columns">
					<div class="column">
						<div class="buttons has-addons">
							<router-link 
							to="/produtos" 
							class="button is-white"
							:class="{'is-active': !$route.query.categoria}">
								Mostre tudo
							</router-link>
							<router-link 
							class="button is-white"
							v-for="categoria in getCategorias"
							:key="categoria" 
							:to="getQuery(categoria)"
							:class="{
								'is-active': categoria.toLowerCase() ===
								$route.query.categoria}">

								{{ categoria }}
							</router-link>
						</div>
					</div>
				</div>
				<div class="columns is-multiline">
					<div class="column is-half-tablet is-one-quarter-desktop"
					v-for="produto in getProdutos"
					:key="produto.id">
						<ProdutoCard  :produto="produto"/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import HeroSubpagina from '@/components/HeroSubpagina.vue'
import ProdutoCard from '@/components/ProdutoCard.vue'
export default {
	name: 'Produtos',
	components: {
		Hero: HeroSubpagina,
		ProdutoCard
	},
	data() {
		return {
			title: 'Nossos produtos',
			subtitle: 'Conosco, você pode encontrar apenas os favoritos do seu gato. ' +
			' Os gatos são, como você provavelmente sabe, conhecidos por serem um pouco' + 
			' exigentes, e nós pensamos que sim - é claro que o gato merece apenas o melhor!' +
			' Entre nossos produtos, você encontrará uma seleção de ração para gatos, doces para gatos,' + 
			' brinquedos para gatos, caixas para gatos e tudo o que você e seu amigo possam precisar para uma vida feliz e sem preocupações.'
		}
	},
	computed: {
		getCategorias() {
			return this.$store.getters.getProdutoCategorias
		},
		getProdutos() {
			return this.$store.getters.getProdutos(this.$route.query.categoria)
		}
	},
	methods: {
		getQuery(categoria) {
			return 'produtos?categoria=' + categoria.toLowerCase()
		}
	}
}
</script>
<style lang="scss"></style>