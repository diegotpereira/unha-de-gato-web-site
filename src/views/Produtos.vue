<template>
	<div>
		<Hero :title="title" :subtitle="subtitle" />
		<section class="section">
			<div class="container">
				<div class="columns">
					<div class="column">
						<div class="buttons has-addons">
							<router-link to="/produtos" class="button is-white">
								Mostre tudo
							</router-link>
							<router-link class="button is-white" to="/">
								
							</router-link>
						</div>
					</div>
				</div>
				<div class="columns is-multiline">
					<div class="column is-half-tablet is-one-quarter-desktop">

					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import HeroSubpagina from '@/components/HeroSubpagina.vue'

export default {
	name: 'Produtos',
	components: {
		Hero: HeroSubpagina
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
	methods: {
		getQuery(categoria) {
			return categoria
		}
	}
}
</script>
<style lang="scss"></style>