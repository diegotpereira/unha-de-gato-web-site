<template>
	<div class="notification">
		<button class="delete" @click="$emit('clicked')"></button>

		{{ mensagem }}
	</div>
</template>
<script>
export default {
	name: 'Notificacao',
	props: {
		mensagem: {
      type: String,
      required: true
		}
	}
}
</script>