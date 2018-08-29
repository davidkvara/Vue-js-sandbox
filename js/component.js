// localy registered component
const message = Vue.component("messageBox", {
  props: {
    title: String,
    content: String
  },
  data() {
    return {
      isVisible: true
    };
  },
  template: `
    <article class="message" v-show="isVisible">
      <div class="message-header">
        {{ title }}
        <button @click="hide" class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        {{ content }}
      </div>
    </article>
  `,
  methods: {
    hide() {
      this.isVisible = false;
    }
  }
});

// globally registered component
// თანმიმდევრობას აქვს მნიშვნელობა
// https://vuejs.org/v2/guide/components-registration.html
Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }} <strong>- test</strong></li>"
});

const app = new Vue({
  el: "#app",
  components: { message },
  data: {
    text: "localy registered component",
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Peanut butter" }
    ]
  }
});
