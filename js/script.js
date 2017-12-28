// Creating Vue component

new Vue({
  el: "#vue-app",
  data: {
    text: "object key and index",
    arr: {
      firstName: "John",
      lastName: "Doe",
      age: 30
    }
  }
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

var app7 = new Vue({
  el: "#app-17",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  }
});

var App = new Vue({
  el: "#app",
  data: {
    arr: [],
    name: "",
    show: false,
    arrOfNums: [12, 54, 85, 64, 77, 2, 53],
    message: ""
  },
  methods: {
    give(e) {
      e.preventDefault();
      var name = this.name;
      var gvaqvs = this.arr.includes(name);
      if (name && !gvaqvs) {
        this.arr.push(name);
        this.name = "";
        this.message = "";
      } else {
        if (!name) {
          this.message = "input is empty!";
        }
        if (gvaqvs) {
          this.message = "already in the list!!";
        }
      }
    },
    toggleMe(e) {
      e.preventDefault();
      this.show = !this.show;
    }
  },
  computed: {
    doubleArr() {
      // ლუწები
      return this.arrOfNums.filter(x => x % 2 === 0);
    }
  }
});

var Root = new Vue({
  el: "#root",
  data: {
    todo: [
      { task: "wake up in the morning", completed: true },
      { task: "drink hot tea", completed: false },
      { task: "check the newsfeed", completed: true },
      { task: "write silly code", completed: true },
      { task: "meet people", completed: false },
      {
        task: "learn something you didn't know yesterday",
        completed: false
      }
    ]
  },
  computed: {
    vqeni() {
      return this.todo.filter(x => x.completed);
    },
    arvqeni() {
      return this.todo.filter(x => !x.completed);
    }
  }
});
