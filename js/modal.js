// https://laracasts.com/series/learn-vue-2-step-by-step/episodes/10
// https://vuejs.org/v2/api/#vm-emit

Vue.component("modal", {
	template: `
		<div class="modal">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		  	<p class="box"><slot></slot></p>
		  </div>
		  <button class="modal-close" @click="$emit('close')" aria-label="close">&times;</button>
		</div>
	`
});

const App = new Vue({
	el: "#modal",
	data: {
		showModal: false
	}
});
