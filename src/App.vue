<template lang="">
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
