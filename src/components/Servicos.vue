<template>
  <section class="section has-text-centered">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <div class="box has-background-white-ter">
            <truck-icon class="icon-2x" />
            <p class="is-uppercase">Entregas rápidas</p>
            <p class="is-size-7">Enviamos sua mercadoria em um dia útil</p>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box has-background-white-ter">
            <shopping-icon class="icon-2x" />
            <p class="is-uppercase">Envio Grátis</p>
            <p class="is-size-7">Com entrega grátis em todos os pedidos</p>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box has-background-white-ter">
            <phone-icon class="icon-2x" />
            <p class="is-uppercase">Serviço profissional</p>
            <p class="is-size-7">Suporte online 24 horas por dia</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TruckIcon from 'vue-material-design-icons/TruckFastOutline.vue'
import ShoppingIcon from 'vue-material-design-icons/ShoppingOutline.vue'
import PhoneIcon from 'vue-material-design-icons/PhoneInTalkOutline.vue'

export default {
	name: 'Servicos',
	components: {
		TruckIcon,
		ShoppingIcon,
		PhoneIcon
	}
}
</script>

<style scoped lang="scss">
.box {
  border-radius: 0;
  box-shadow: none;
}

.material-design-icon.icon-2x {
  height: 1.5em;
  width: 1.5em;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 2em;
  width: 2em;
}
.section {
  padding-bottom: 1rem;
}
</style>