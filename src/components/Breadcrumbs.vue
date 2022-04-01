<template>
	<nav class="Breadcrumbs" aria-label="Breadcrumbs">
		<ul>
			<li class="is-size-7">
				<router-link :to="to" class="has-text-grey">
					{{ pagina }}
				</router-link>
			</li>
			<li class="is-size-7">
				<router-link :to="toCategoria" class="has-text-grey">
					{{ categoria }}
				</router-link>
			</li>
			<li class="is-active is-size-7">
				<a href="#"> {{ titulo }}</a>
			</li>
		</ul>
	</nav>
</template>
<script>
export default {
	name: 'Breadcrumbs',
	props: {
		to: {
			type: String,
			require: true
		},
		pagina: {
			type: String,
			require: true
		},
		categoria: {
			type: String,
			require: true
		},
		toCategoria: {
			type: String,
			require: true
		},
		titulo: {
			type: String,
			require: true
		}
	}
}
</script>