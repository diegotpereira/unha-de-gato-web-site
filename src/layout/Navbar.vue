<template>
	<nav class="navbar is-white is-spaced" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a href="/" class="navbar-item">
        <img :src="logo" alt="Unha de Gato" width="150px" />
			</a>

			<a 
			class="navbar-burger" 
			role="button" 
			aria-label="menu" 
			aria-expanded="false" 
			@click="estaAberto = !estaAberto" 
			v-bind:class="{'is-active': estaAberto}">

				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div class="navbar-menu" v-bind:class="{'is-active': estaAberto}">
			<div class="navbar-end">
				<router-link to="/" class="navbar-item">Começo</router-link>
				<router-link to="/produtos" class="navbar-item">Produtos</router-link>
				<router-link to="/blog" class="navbar-item">Blog</router-link>
				<router-link to="/sobre" class="navbar-item">Sobre</router-link>
				<router-link to="/contato" class="navbar-item">Contato</router-link>
				<router-link to="/carrinho" class="navbar-item">Carrinho de compras</router-link>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'Navbar',
	data() {
		return {
			logo: require("@/assets/unha-de-gato.svg"),
			estaAberto: false
		}
	},
}
</script>

<!-- Adicione o atributo "scoped" para limitar o CSS apenas a este componente -->
<style scoped lang="scss">
.navbar-item {
  text-transform: uppercase;
}

.navbar-menu {
  margin-right: 1rem;
  letter-spacing: 0.05em;
  box-shadow: none;
}

.navbar.is-spaced {
  padding: 0.5rem;
}

@media screen and (min-width: 1024px) {
  .navbar.is-spaced {
    padding: 0.5rem 1rem;
  }
}
</style>