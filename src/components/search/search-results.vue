<template>
  <div class="results">
    <div
      :data-id="todo.id"
      class="result"
      :class="{completed: todo.completed}"
      v-for="todo in todos"
      :key="todo.id"
    >
      <div class="title">{{todo.title}}</div>
      <div class="name">{{todo.name}}</div>
    </div>
  </div>
</template>

<script>
import { SearchService } from "@/services/search.js";
export default {
  props: {
    selectedUsers: Array,
    users: Array
  },
  data() {
    return {
      todos: undefined
    };
  },
  watch: {
    selectedUsers: {
      handler(to) {
        SearchService.GetTodosByUserIDs(
          this.selectedUsers.map(user => user.id)
        ).then(todos => {
          this.todos = todos.map(todo => ({
            ...todo,
            name: this.users.find(user => user.id === todo.userId).name
          }));
        });
      },
      immediate: true
    }
  }
};
</script>
<style scoped>
.result {
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid red;
  margin: 10px 0px;
}
.result.completed {
  border: 2px solid green;
}
.result .name {
  font-size: 0.7em;
  text-align: right;
  color: #888;
}
</style>
