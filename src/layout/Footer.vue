<template>
	<footer class="footer has-background-black-bis has-text-white">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h4 class="has-text-weigth-bold">Contate-Nos</h4>
					<ul>
						<li>
							<a href="unhadegatoarranhadores@gmail.com">unhadegatoarranhadores@gmail.com</a>
						</li>
						<li>Tel. 51 99420-2042</li>
						<li>Dias Úteis: 9:00h as 18:00h</li>
					</ul>
				</div>
				<div class="column">
					<h4 class="has-text-weight-bold">Visite-Nos</h4>
					<ul>
						<li>Rua Cão do Mato, 84</li>
						<li>José Amândio 88215000 Bombinhas, SC - Brasil</li>
						<li>Atendemos RS e SC</li>
					</ul>
				</div>
				<div class="column">
					<h4 class="has-text-weight-bold">Siga-nos nas redes sociais</h4>
					<a href="http://facebook.com" target="_blank">
						<facebook-icon class="icon-2x" />
					</a>
					<a href="http://instagram.com" target="_blank">
						<instagram-icon class="icon-2x" />
					</a>
					<a href="http://linkedin.com" target="_blank">
						<linkedin-icon class="icon-2x" />
					</a>
					<a href="http://youtube.com" target="_blank">
						<youtube-icon class="icon-2x" />
					</a>
				</div>
			</div>
			<p class="is-size-7">&copy; 2022 Unha de Gato Arranhadores - Serviços para animais de estimação</p>
		</div>
	</footer>
</template>
<script>
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import LinkedinIcon from "vue-material-design-icons/Linkedin.vue";
import YoutubeIcon from "vue-material-design-icons/Youtube.vue";
export default {
	name: 'Footer',
	components: {
		FacebookIcon,
		InstagramIcon,
		LinkedinIcon,
		YoutubeIcon,
	}
}
</script>
<!-- Adicione o atributo "scoped" para limitar o CSS apenas a este componente -->
<style scoped lang="scss">
a {
	color: #ffff;
}
.material-design-icon.icon-2x {
	margin-top: 0.5rem;
	height: 2.5em;
	width: 2.5em;
	line-height: 1;
	margin-right: 0.25rem;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
	height: 2.5em;
	width: 2.5em;
}
</style>