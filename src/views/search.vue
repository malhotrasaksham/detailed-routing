<template>
  <div>
    <search-box :users="users" :selectedUsers.sync="selectedUsers"></search-box>
    <search-results :users="users" :selectedUsers="selectedUsers"></search-results>
  </div>
</template>
<script>
import SearchBox from "@/components/search/search-box";
import SearchResults from "@/components/search/search-results";
import { SearchService } from "@/services/search.js";
export default {
  components: {
    SearchBox,
    SearchResults
  },
  data() {
    return {
      users: undefined,
      selectedUsers: []
    };
  },
  methods: {
    SearchToDos() {
      SearchService.GetTodosByUserIDs(
        this.selectedUsers.map(user => user.id)
      ).then(res => {
        this.todos = res;
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    SearchService.GetUsers().then(res => {
      next(vm => {
        vm.users = res;
      });
    });
  }
};
</script>
