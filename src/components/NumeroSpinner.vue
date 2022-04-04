<template>
	<div class="field is-horizontal">
		<div class="field has-addons">
			<div class="control">
				<a class="button is-outlined" @click="subtrair">-</a>
			</div>
			<div class="control">
				<input type="text" class="input.is-expanded" v-model="novaQuantidade" readonly />
			</div>
			<div class="control">
				<a class="button is-outlined" @click="add">+</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'NumeroSpinner',
	props: {
		quantidade: {
			type: Number,
			required: true
		},
		min: {
			type: String,
			required: true 
		}
	},
	data() {
		return {
			novaQuantidade: 0
		}
	},
	created() {
		this.novaQuantidade = this.quantidade
	},
	methods: {
		subtrair() {
			if (this.novaQuantidade === Number(this.min)) {
				
				return 
			}
			this.novaQuantidade--
			this.$emit('atualizarQuantidade', this.novaQuantidade)
		},
		add() {
			this.novaQuantidade++
			this.$emit('atualizarQuantidade', this.novaQuantidade)
		}
	}
}
</script>
<style lang="scss" scoped>
.field.is-horizontal {
	max-width: 75%;
}

.input {
	text-align: center;
}

@media screen and (min-width: 768px) {
	.field.is-horizontal {
		width: auto;
		margin-bottom: 0.5rem;
	}

	.input {
		width: 5rem;
		text-align: center;
	}
}
</style>