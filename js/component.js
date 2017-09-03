Vue.component('message', {
	props:['header', 'content', 'link'],

	data(){
		return{
			isVisible:true,
			aq:'http://example.com' //https://laracasts.com/series/learn-vue-2-step-by-step/episodes/9
		}
	},
	template: `
		<article class="message" v-show="isVisible">
			<div class="message-header">
				{{ header }}
				<button v-on:click="hide" class="delete" aria-label="delete"></button>
			</div>
			<div class="message-body">
				{{ content }}
				<a :href="aq">{{link}}</a>
			</div>
		</article>
	`,

	methods:{
		hide(){
			this.isVisible = false;
		}
	}
});

new Vue({
	el: '#bulma',
	data:{
		text:'creating vue components with bulma'
	}
});