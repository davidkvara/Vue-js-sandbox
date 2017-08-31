// Creating Vue component

	new Vue ({
		el:'#vue-app',
		data:{
			text: 'object key and index',
			arr: {
				firstName: 'John',
				lastName: 'Doe',
				age: 30
			}
		}
	});

	Vue.component('todo-item', {
	  // The todo-item component now accepts a
	  // "prop", which is like a custom attribute.
	  // This prop is called todo.
	  props: ['todo'],
	  template: '<li>{{ todo.text }}</li>'
	});

	var app7 = new Vue({
	  el: '#app-17',
	  data: {
	    groceryList: [
	      { id: 0, text: 'Vegetables' },
	      { id: 1, text: 'Cheese' },
	      { id: 2, text: 'Whatever else humans are supposed to eat' }
	    ]
	  }
	})