<template>
	<div class="about">
		<Hero title="Sobre nós" />
		Sobre
		<section class="section">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-5">
						<h2 class="title is-2 has-text-weight-bold">
							A loja de gatos para você que ama tudo de gatos
						</h2>
						<p class="content">
							Nosso objetivo é oferecer a você um lugar vivo e emocionante, 
							onde você pode encontrar todas as coisas que você precisa para o seu gato. 
							A nossa ambição é surpreender e despertar os nossos clientes oferecendo 
							constantemente produtos novos, únicos e atuais.
						</p>
					</div>
					<div class="column column-img is-6 is-offset-1 has-background-black">
						<figure class="image is-4by3">
							<img src="@/assets/imagens/about.jpg" />
						</figure>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import HeroSubpagina from '@/components/HeroSubpagina.vue'
export default {
	name: 'Sobre',
	components: {
		Hero: HeroSubpagina
	}
}
</script>

<style scoped lang="scss">
.column-img {
  padding: 0;
}
</style>