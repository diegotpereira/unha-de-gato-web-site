<template>
	<div>
		<Hero :title="title" subtitle />
		<section class="section has-background-white-ter">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-half">
						
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import HeroSubpagina from '@/components/HeroSubpagina.vue'
export default {
	name: 'Blog',
	components: {
		Hero: HeroSubpagina
	},
	data() {
		return {
			title: 'Notícias, dicas e sugestões'
		}
	},
}
</script>