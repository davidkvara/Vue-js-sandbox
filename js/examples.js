var app = new Vue({
  el: "#app",
  data: {
    text: "check console",
    message: "You loaded this page on " + new Date().toLocaleString()
  },
  methods: {
    log(e) {
      console.log(`you clicked keycode ${e.keyCode} button`);
    }
  }
});

// TODO: this one
/*var dro = new Vue({
  el: "#time",
  data: {
    dro: 0
  },
  methods: {
    tik() {
      setInterval(() => (this.dro += 1), 1000);
    }
  }
});
*/
var app3 = new Vue({
  el: "#app3",
  data: {
    x: 0,
    y: 0
  },
  methods: {
    reaction(e) {
      (this.x = e.offsetX), (this.y = e.offsetY);
    }
  }
});

var app4 = new Vue({
  el: "#app4",
  data: {
    age: 25,
    number: 1
  },
  methods: {
    inc() {
      this.age += Number(this.number);
    },
    dec() {
      this.age -= 1;
    }
  }
});

var app5 = new Vue({
  el: "#app5",
  data: {
    visible: true,
    text: "Vue visibility: v-if"
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    }
  }
});

var app6 = new Vue({
  el: "#app6",
  data: {
    many: [
      { text: "learn javascript" },
      { text: "learn Vue" },
      { text: "build something awesome" }
    ],
    all: [
      { sxva: "learn python" },
      { sxva: "learn node" },
      { sxva: "learn express" }
    ]
  }
});

var larapend = new Vue({
  el: "#app7",
  data: {
    name: "",
    text: "append to list [todo again]",
    contacts: ["sarah", "mark", "kate"]
  },
  methods: {
    addName() {
      if (this.name) {
        this.contacts.push(this.name);
        this.name = "";
      }
    }
  }
});

var example = new Vue({
  el: "#app9",
  data: {
    text: "click to disable",
    isloading: true,
    h3: "reversing message",
    yes: false
  },
  methods: {
    toggleC() {
      (this.yes = true), (this.text = "disabled");
    },
    reverse() {
      this.h3 = this.h3
        .split("")
        .reverse()
        .join("");
    }
  }
});
