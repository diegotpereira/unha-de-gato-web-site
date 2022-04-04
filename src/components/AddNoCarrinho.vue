<template>
	<div>
		<form @submit.prevent="addNoCarrinho">
			<NumeroSpinner 
				:quantidade="this.quantidade"
				min="0"
				@atualizarQuantidade="atualizarQuantidade" />

				<button type="submit" class="button is-primary" :disabled="estaDesabilitado">
					Adicionar ao Carrinho
				</button>
		</form>
		<p class="is-size-7" v-if="produto.inventario">
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
</template>
<script>
import NumeroSpinner from '@/components/NumeroSpinner.vue'
import CheckIcon from 'vue-material-design-icons/CheckCircle.vue'
import { mapGetters} from 'vuex'
import CartOffIcon from 'vue-material-design-icons/CartOff.vue'

export default {
	name: 'AddNoCarrinho',
	components: {
		NumeroSpinner,
		CartOffIcon,
		CheckIcon
	},
	data() {
		return {
			quantidade: 1
		}
	},
	computed: {
		...mapGetters({
			produto: 'getAtualProduto'
		}),
		estaDesabilitado() {
			return !this.produto.inventario
		},
		produtoImg() {
			return require('@/assets/imagens/produtos/' + this.produto.image[0])
		}
	},
	methods: {
		atualizarQuantidade(number) {
			this.quantidade = number
		},
		addNoCarrinho() {
			this.$store.commit('addNoCarrinhoCompras', {
				nome: this.produto.titulo,
				id: this.produto.id,
				image: this.produto.image[0],
				preco: this.produto.preco,
				quantidade: this.quantidade
			})
			this.$emit('toggle')
		},
		produtoAdicionado(produtos) {
			return produtos.some(produto => produto.id === this.produto.id)
		}
	}
}
</script>
<style lang="scss" scoped>
form {
	margin-bottom: 0.75rem;
}

.button.is-primary {
	width: 75%;
}

@media screen and (min-width: 768px) {
	form {
		display: flex;
	}

	.button.is-primary {
		margin-left: 1rem;
		width: auto;
	}
}
</style>