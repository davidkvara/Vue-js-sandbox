var app = new Vue({
	el:'#app',
	data:{
		message:'check console on event keydown',
		name:'david',
		link:'<a href="http://example.com">some link</a>'
	},
	methods:{
		nice: function(e){
			console.log(`you clicked ${e.keyCode} button`);
		}
	}
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
	el:'#app3',
	data:{
		x:0,
		y:0
	},
	methods:{
		reaction: function(e){
			this.x = e.offsetX,
			this.y = e.offsetY
		}
	}
});

var app4 = new Vue({
	el:'#app4',
	data:{
		age:25
	},
	methods:{
		inc: function(aq){
			this.age+=aq;
		},
		dec: function(){
			this.age--;
		}
	}
});

var app5 = new Vue({
	el:'#app5',
	data:{
		seen:true,
		text:'Vue if seen: true or false - visibility'
	}
});

var app6 = new Vue({
	el:'#app6',
	data:{
		many:[
			{text: 'learn javascript'},
			{text: 'learn Vue'},
			{text: 'build something awesome'}
		],
		all:[
			{sxva: 'learn php'},
			{sxva: 'learn node'},
			{sxva: 'learn laravel'},
			{sxva: 'learn express'},
			{sxva: 'shits crazy'}
		]
	}
});

var loop = new Vue({
	el:'#loop',
	data:{
		independent:'loop by myself',
		bevri:[
			{sia:"ვიუ ჯეიესის ლუპი"},
			{sia:"დამოუკიდებელი სამუშაო"},
			{sia:"როგორც დაგიბარებია"}
		]
	}
});

var reverse = new Vue({
	el:'#reverse',
	data:{
		h3:'reversing message',
	},
	methods:{
		reverse: function(){
			this.h3 = this.h3.split('').reverse().join('');
		}
	}
});

var larapend = new Vue({
	el:'#app7',
	data: {
		name:'',
		text:'append to list [seen on laracasts]',
		names:['john','sarah','mark','kate']
	},
	methods:{
		addName: function(){
			this.names.push(this.name);
			this.name='';
		},
		removeName: function(){
			this.names.pop();
		}
	}
});

var example23 = new Vue({
	el: "#example23",
	data:{
		text:'click to disable',
		isloading:true,
		ese: false
	},
	methods:{
		toggleC: function(){
			this.ese = true,
			this.text = 'disabled'
		}
	}
});

var example24 = new Vue({
	el:'#computed',
	data:{
		text:'tasks: lorem ipsum dolor',
		text2:'completed tasks: with computed',
		list:[
			{task:'read a book', completed: true},
			{task:'travel the world', completed: false},
			{task:'build a home', completed: false},
			{task:'change haircut', completed: true},
			{task:'sing a song', completed: false},
			{task:'dance like crazy', completed: false},
			{task:'learn to swim', completed: false}
		]
	},
	computed:{
		gaket: function(){
			return this.list.filter(x => x.completed);
		}
	}
})