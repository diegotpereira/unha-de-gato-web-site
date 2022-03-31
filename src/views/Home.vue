<template>
	<div class="home">
		<Hero />
		<Intro />
		<RecursoProdutos />
		<RecursosSecao />
		<RecursoProdutos />
		<PostagensBlogDestaque />
	</div>
</template>
<script>
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import RecursoProdutos from '@/components/RecursoProdutos.vue'
import RecursosSecao from '@/components/RecursosSecao.vue'
import PostagensBlogDestaque from '@/components/PostagensBlogDestaque.vue'
export default {
	name: 'home',
	components: {
		Hero,
		Intro,
		RecursoProdutos,
		RecursosSecao,
		PostagensBlogDestaque
	}
}
</script>
<style lang="">
	
</style>