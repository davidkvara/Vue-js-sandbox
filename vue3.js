// Creating Vue component

Vue.component('task', {

	props:['todo'],
	template:'<li>{{todo.text}}</li>'

});

var vm = new Vue({
	el: "#root",
	data:{
		somelist:[
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Whatever else humans are supposed to eat' }
		]
	}

});