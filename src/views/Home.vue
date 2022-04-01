<template>
	<div class="home">
		<Hero />
		<Intro />
		<RecursoProdutos :produtos="getTopProdutos" title="Produtos populares"/>
		<RecursosSecao />
		<RecursoProdutos :produtos="getUltimosProdutos" title="Novidade na loja"/>
		<PostagensBlogDestaque />
	</div>
</template>
<script>
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import RecursoProdutos from '@/components/RecursoProdutos.vue'
import RecursosSecao from '@/components/RecursosSecao.vue'
import PostagensBlogDestaque from '@/components/PostagensBlogDestaque.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'home',
	components: {
		Hero,
		Intro,
		RecursoProdutos,
		RecursosSecao,
		PostagensBlogDestaque
	},
	computed: {
		...mapGetters(['getTopProdutos', 'getUltimosProdutos'])
	}
}
</script>
<style lang="">
	
</style>