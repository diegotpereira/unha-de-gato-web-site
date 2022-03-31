<template>
	<div class="about">
		<Hero title="Contate-Nos" />

		<section class="section">
			<div class="container">
				<div class="columns is-vcentered">
					<div class="column is-5">
						<h2 class="title is-2 has-text-weight-bold">Sinta-se livre para nos perguntar qualquer coisa.</h2>
						<form>
							<div class="field">
								<div class="control">
									<input type="text" class="input" placeholder="Nome..." />
								</div>
							</div>
							<div class="field">
								<div class="control">
									<input type="text" class="input" placeholder="Endereço de email..." />
								</div>
							</div>
							<div class="field">
								<div class="control">
									<input type="text" class="input" placeholder="Assunto..." />
								</div>
							</div>
							<div class="field">
								<div class="control">
									<textarea class="textarea" placeholder="Sua mensagem..."></textarea>
								</div>
							</div>
							<div class="control">
								<button class="button is-primary is-fullwidth">Enviar</button>
							</div>
						</form>
					</div>
					<div class="column column-img is-6 is-offset-1 has-background-black">
						<figure class="image is-4by3">
							<img src="@/assets/imagens/contact.jpg" alt="" />
						</figure>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: 'Contato'
}
</script>