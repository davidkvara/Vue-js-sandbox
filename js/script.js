// Todos

const App = new Vue({
  el: "#app",
  data: {
    todos: [
      { task: "wake up in the morning", completed: true },
      { task: "read the newsfeed", completed: true },
      { task: "meet people", completed: false },
      {
        task: "learn something you didn't know yesterday",
        completed: true
      }
    ],
    name: "dave",
    input: "",
    showModal: false,
    message: ""
  },
  methods: {
    addTodo() {
      const newTodo = {
        task: this.input,
        completed: false
      };

      const ukveGvaqvs = this.todos.find(todo => todo.task === this.input);

      if (!this.input) {
        this.message = "input is empty!";
      } else if (ukveGvaqvs) {
        this.message = "already in the list!!";
      } else if (this.input && !ukveGvaqvs) {
        this.todos.push(newTodo);
        this.input = "";
        this.message = "";
      }
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  },
  computed: {
    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    },
    activeTodos() {
      return this.todos.filter(todo => !todo.completed);
    }
  }
});
