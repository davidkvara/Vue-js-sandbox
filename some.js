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