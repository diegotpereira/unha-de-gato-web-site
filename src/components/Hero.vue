<template>
    <section class="hero is-primary is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<div class="columns">
					<div class="column is-half">
						<transition appear appear-active-class="animated fadeInUp slow">
							<h1 class="title is-1 has-text-weight-bold">Nós amamos gatos. Os gatos nos amam.</h1>
						</transition>
						<transition appear appear-active-class="animated fadeInUp slow delay-1s">
							<h2 class="subtitle is-5">
								texto
							</h2>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'Hero'
}
</script>

<!-- Adicione o atributo "scoped" para limitar o CSS apenas a este componente -->
<style scoped lang="scss">
.hero {
  background-image: url("../assets/imagens/unha-de-gato-2.jpg");
  background-size: cover;
  background-position: center;
}

.hero-title-enter-active,
.hero-title-leave-active {
  transition: transform 0.5s ease;
}
.hero-title-enter,
.hero-title-leave-to {
  transform: translateX(-100%);
}

@media screen and (min-width: 1024px) {
  .hero .title {
    font-size: 4.5rem;
  }

  .hero .subtitle {
    margin-top: -1.5rem;
    line-height: 1.5;
  }
  .hero.is-primary .title {
    color: #3b407c;
  }
}
</style>