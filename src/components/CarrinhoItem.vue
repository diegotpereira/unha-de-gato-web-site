<template>
	<article class="media">
		<figure class="media-left image is-128x128">
			<img :src="image" />
		</figure>
		<div class="media-content">
			<div class="level">
				<div class="level-left">
					<div class="level-item">
						<h3 class="is-size-6 has-text weight-bold">
							{{ item.nome }}
						</h3>
					</div>
				</div>
				<div class="level-right">
					<p class="level-item">{{ ietm.preco }} R$</p>
				</div>
			</div>
			<NumeroSpinner
			:quantidade="item.quantidade"
			min="1"
			@atualizarQuantidade="atualizarQuantidade" />

			<a @click.prevent="removerItem" class="delete-item">
				<small class="has-text-grey">
					<trash-can-icon class="icon-2x" /> Remover
				</small>
			</a>
		</div>
	</article>
</template>
<script>
import NumeroSpinner from '@/components/NumeroSpinner.vue'
import TrashCanIcon from 'vue-material-design-icons/TrashCanOutline.vue';

export default {
	name: 'CarrinhoItem',
	components: {
		NumeroSpinner,
		TrashCanIcon
	},
	props: {
		item: {
			type: Object,
			required: true
		},
		index: {
			type: Number,
			required: true 
		}
	},
	computed: {
		image() {
			return require('@/assets/imagens/produtos/' + this.item.image)
		}
	},
	methods: {
		atualizarQuantidade(number) {
			this.$store.commit('atualizarQuantidade', { index: this.index, number })
		},
		removerItem() {
			this.$store.commit('removerDoCarrinhoCompras', this.index)
		}
	}
}
</script>

<style lang="scss">
.material-design-icon.icon-2x {
	height: 1.5em;
	width: 1.5em;
	line-height: 1;
}

.level:not(:last-child) {
	margin-bottom: 1rem;
}
.level-item {
	justify-content: flex-start;
}

.level-left + .level-right {
	margin-top: 0.25rem;
}
</style>