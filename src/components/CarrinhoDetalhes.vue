<template>
	<div class="column is-4 is-offset-1">
		<div class="table-container">
			<table class="table is-fullwidth">
				<thead>
					<tr>
						<th colspan="2">
							<h2 class="title is-4">Valor total</h2>
						</th>
					</tr>
				</thead>
				<tr>
					<td>Deltotal</td>
					<td>{{ soma }} R$</td>
				</tr>
				<tr>
					<td>Frete</td>
					<td>Grátis</td>
				</tr>
				<tr class="has-text-weight-bold">
					<td>Montante</td>
					<td>{{ soma }} R$</td>
				</tr>
			</table>
			<button class="button is-primary is-fullwidth" @click="toggle">
				Vá para o caixa
			</button>
		</div>
		<transition 
			enter-active-class="animated fadeInDown"
			leave-active-class="animated fadeOutUp">

			<Notificacao v-if="notificacao" :mensagem="mensagem" @clicked="toggle" />
		</transition>
	</div>
</template>
<script>
import Notificacao from '@/components/Notificacao.vue'
export default {
	name: 'CarrinhoDetalhes',
	components: {
		Notificacao
	},
	data() {
		return {
			notificacao: false,
			mensagem: 
				'Este recurso está indisponível no momento. Por favor, tente novamente mais tarde.'
		}
	},
	props: {
		soma: {
			type: Number,
			required: true 
		}
	},
	methods: {
		toggle() {
			this.notificacao = !this.notificacao
		}
	}
}
</script>
<style lang="scss" scoped>
button {
	font-weight: 700;
	text-transform: uppercase;
}
</style>
