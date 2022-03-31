<template>
	<section class="section">
		<div class="container">
			<h2 class="title is-size-3-mobile is-2 has-text-left-mobile has-text-centered"> {{ title }}</h2>
			<div class="columns is-multiline">
				<div>

				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'RecursoProdutos',
	props: {
		title: {
			type: String
		}
	}
}
</script>
<!-- Adicione o atributo "scoped" para limitar o CSS apenas a este componente -->	
<style scoped lang="scss">
.section {
  padding: 4rem 1.5rem;
}
</style>