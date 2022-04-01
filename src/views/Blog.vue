<template>
	<div>
		<Hero :title="title" subtitle />
		<section class="section has-background-white-ter">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-half">
						<Post/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import HeroSubpagina from '@/components/HeroSubpagina.vue'
import BlogPostCard from '@/components/BlogPostCard.vue';

export default {
	name: 'Blog',
	components: {
		Hero: HeroSubpagina,
		Post: BlogPostCard
	},
	data() {
		return {
			title: 'Notícias, dicas e sugestões'
		}
	},
}
</script>