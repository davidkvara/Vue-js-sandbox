//  https://laracasts.com/series/learn-vue-2-step-by-step/episodes/10

Vue.component('modal', {
	template: `
		<div class="modal is-active">
		  <div class="modal-background" @click="$emit('close')"></div>
		  <div class="modal-content">
		  	<p class="box">
			<slot></slot>
		  	</p>
		  </div>
		  <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
		</div>
	`
});

new Vue ({
	el:'#modal',
	data:{
		showModal: false
	}
});