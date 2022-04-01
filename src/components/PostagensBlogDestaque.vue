<template>
	<section class="section has-background-white-ter">
		<div class="container">
			<h2 class="title is-size-3-mobile is-2 has-text-left-mobile has-text-centered">
				{{ title }}
			</h2>
			<div class="columns is-multiline">
				<div
				v-for="(post, index) in posts"
				v-bind:key="index" 
				class="column is-one-third">
					<BlogPostCard :post="post"/>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import BlogPostCard from '@/components/BlogPostCard.vue'
export default {
	name: 'PostagensBlogDestaque',
	props: {
		posts: {
			type: Array
		},
		title: {
			type: String
		}
	},
	components: {
		BlogPostCard
	}
}
</script>
<!-- Adicione o atributo "scoped" para limitar o CSS apenas a este componente -->
<style scoped lang="scss">
.section {
	padding: 4rem 1.5rem;
}
</style>