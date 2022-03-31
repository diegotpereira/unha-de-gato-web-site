<template>
	<section class="hero is-primary is-medium">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-two-thirds has text-centered">
						<h1 class="title is-1 has-text-weight-bold"> {{ title }}</h1>
						<p class="content is-medium" v-show="subtitle">{{ subtitle }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'HeroSubpagina',
	props: {
		title: {
			type: String
		},
		subtitle: {
			type: String 
		}
	}
}
</script>

<!-- Adicione o atributo "scoped" para limitar o CSS apenas a este componente -->
<style scoped lang="scss">
.hero {
  background-image: url("../assets/imagens/hero-sub.jpg");
  background-size: cover;
  background-position: center;
}
</style>