<template>
	<div class="home">
		<Hero />
		<Intro />
		<Servicos />
		<RecursoProdutos :produtos="getTopProdutos" title="Produtos populares"/>
		<RecursosSecao />
		<RecursoProdutos :produtos="getUltimosProdutos" title="Novidade na loja"/>
		<PostagensBlogDestaque :posts="getUltimosPosts" title="Últimas do blog" />
	</div>
</template>
<script>
import Hero from '@/components/Hero.vue'
import Intro from '@/components/Intro.vue'
import RecursoProdutos from '@/components/RecursoProdutos.vue'
import RecursosSecao from '@/components/RecursosSecao.vue'
import PostagensBlogDestaque from '@/components/PostagensBlogDestaque.vue'
import { mapGetters } from 'vuex'
import Servicos from '@/components/Servicos.vue'

export default {
	name: 'home',
	components: {
		Hero,
		Intro,
		Servicos,
		RecursoProdutos,
		RecursosSecao,
		PostagensBlogDestaque
	},
	computed: {
		...mapGetters(['getTopProdutos', 'getUltimosProdutos', 'getUltimosPosts'])
	}
}
</script>
<style lang="">
	
</style>