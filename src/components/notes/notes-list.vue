<template>
  <div class="notes">
    <h3>Available Notes</h3>
    <router-link
      tag="div"
      class="note"
      v-for="note in notes"
      :key="note.id"
      @click="VewDetails(note.id)"
      :to="{name: 'NotesDetails', params: {id: +note.id}}"
    >{{note.title}}</router-link>
  </div>
</template>
<script>
import { NotesService } from "@/services/notes.js";

export default {
  data() {
    return {
      notes: undefined
    };
  },
  beforeRouteEnter: (to, from, next) => {
    NotesService.GetNotesList().then(res => {
      next(vm => {
        vm.notes = res;
      });
    });
  },
  methods: {
    ViewDetails(id) {}
  }
};
</script>
<style scoped>
.note {
  padding: 10px 0px;
  cursor: pointer;
}
.note:hover:after {
  padding: 0px 10px;
  content: ">";
}
</style>
