<template>
	<div id="app">
		<app-navbar />
		<router-view />
		<app-footer />
	</div>
</template>
<script>
import Navbar from '@/layout/Navbar.vue'
import Footer from '@/layout/Footer.vue'
export default {
  name: 'App',
  components: {
    'app-navbar': Navbar,
	'app-footer': Footer
  },
	created() {
		this.$store.dispatch('bindProdutos')
  }
}
</script>

<style lang="scss"></style>	
