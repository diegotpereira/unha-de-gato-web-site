<template>
	<div>
		<Hero title="Notícias, dicas & sugestões" subtitle />
		<section class="section">
			<div class="container">
				<Breadcrumbs 
				to="/blog"
				pagina="Blogg"
				to-categoria="/blog"
				:categoria="post.categoria"
				:titulo="post.titulo" />

				<div class="columns is-multiline">
					<div class="column is-full">
						<figure class="image is-4by3">
							<img :src="postImg" />
						</figure>
					</div>
					<div class="column is-four-fifths">
						<h2 class="title is-1"> {{ post.titulo }}</h2>
						<p class="subtitle is-6">
							Publicados {{ postData }} do {{ post.autor }}
						</p>
						<p class="content">{{ post.content }} </p>
					</div>
				</div>
				<arrow-icon />
				<router-link to="/blog" class="is-size-7 has-text-grey">
					Voltar para todas as postagens
				</router-link>
			</div>
		</section>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import HeroSubpagina from '@/components/HeroSubpagina.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ArrowIcon from 'vue-material-design-icons/ArrowLeft.vue';
import moment from 'moment';

export default {
	name: 'BlogView',
	components: {
		Hero: HeroSubpagina,
		Breadcrumbs,
		ArrowIcon
	},
	computed: {
		...mapGetters({
			post: 'getAtualPost'
		}),
		postData() {
			return moment.unix(this.post.postado.segundos).format('DD-MM-YYYY')
		},
		postImg() {
			return require('@/assets/imagens/blog/' + this.post.image)
		},
		categoriaUrl() {
			return '/blog?categoria=' + this.post.categoria.toLowerCase()
		}
	}
}
</script>

<style scoped lang="scss"></style>