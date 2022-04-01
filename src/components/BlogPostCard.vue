<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-4by3 has-background-white-ter">
				<router-link :to="postUrl" @click.native="salvarPostagemAtual(post)" tag="img" :src="postImg">
				
				</router-link>
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<router-link :to="postUrl" @click.native="salvarPostagemAtual(post)">
					<h3 class="title is-size-4 has-text-weight-bold">
						{{ post.titulo }}
					</h3>
				</router-link>
				<p><clock-icon class="clock-icon" /></p>

				<p>  </p>
				<router-link :to="postUrl" class="is-primary has-text-weight-bold is-uppercase" @click.native="salvarPostagemAtual(post)">
					Consulte Mais informação
					<paw-icon class="paw-icon" />
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import PawIcon from 'vue-material-design-icons/Paw.vue';
import ClockIcon from 'vue-material-design-icons/ClockOutline.vue';
export default {
	name: 'BlogPostCard',
	props: {
		post: {
			type: Object
		}
	},
	components: {
		PawIcon,
		ClockIcon
	},
	methods: {
		salvarPostagemAtual(post) {
			this.$store.commit('salvarPostagemAtual', post)
		}
	},
	computed: {
		postUrl() {
			return '/blog' + this.post.slug
		},
		postImg() {
			return require('@/assets/imagens/blog/' + this.post.image)
		}
	}
}
</script>
<!-- Adicione o atributo "scoped" para limitar o CSS apenas a este componente -->
<style scoped lang="scss">
.card {
	box-shadow: none !important;
	.card-image {
		cursor: pointer;
	}
}

.title {
	margin-bottom: 0.25rem;
}

.clock-icon {
	margin-right: 0.5rem;
}

.paw-icon {
	margin-left: 0.25rem;
}
</style>