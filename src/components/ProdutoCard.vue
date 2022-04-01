<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-square has-background-white-ter">
				<router-link to="/"></router-link>
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<router-link to="/">
					<h3 class="is-size-6"> produto.titulo </h3>
				</router-link>
				<p class="title is-size-2 has-text-weight-bold-is-marginless">
					produto.preco
				</p>
				<p class="is-size-7">
					<span class="icon">
						<check-icon class="has-text-primary" />
					</span>
					<span>Em estoque</span>
				</p>
				<p class="is-size-7">
					<span class="icon">
						<cart-off-icon class="has-text-danger" />
					</span>
					<span>Temporariamente fora de estoque</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import CartOffIcon from 'vue-material-design-icons/CartOff.vue';
import CheckIcon from 'vue-material-design-icons/CheckCircle.vue';

export default {
	name: 'ProdutoCard',
	props: {
		produto: {
			type: Object
		}
	},
	components: {
		CartOffIcon,
		CheckIcon
	}
}
</script>