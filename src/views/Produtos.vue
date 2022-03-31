<template>
	<div>
		<section class="section">
			<div class="container">
				<div class="columns">
					<div class="column">
						<div class="buttons has-addons">
							<router-link to="/produtos" class="button is-white" :class="{}">
								Mostre tudo
							</router-link>
							<router-link class="button is-white" :class="{}">
								{{ categoria }}
							</router-link>
						</div>
					</div>
				</div>
				<div class="columns is-multiline">
					<div class="column is-half-tablet is-one-quarter-desktop">

					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: 'Produtos'
}
</script>
<style lang="scss"></style>