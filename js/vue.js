// JS with Vue JS:  https://vuejs.org/

Vue.component('news-box', {
	data(){
		return{
			seen: true
		}
	},
	props:['header','news','copyright'],
	template: `
	<div class="container" v-show="seen">
		<span class="close" @click="hideThis">&times;</span>
		<div class="header">{{header}}</div>
		<div class="box">{{news}}</div>
		<footer>{{copyright}}</footer>
	</div>
	`,
	methods:{
		hideThis: function() {
			this.seen = false
		}
	}
});

new Vue ({
	el:'#app'
});