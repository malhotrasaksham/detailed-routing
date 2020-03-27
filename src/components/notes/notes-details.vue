<template>
  <div>
    <div class="back" @click="GoBack()">< Go Back</div>
    <div class="loading" v-if="note === undefined">Loading...</div>
    <div class="notAvailable" v-if="note === null">Cannot load the note</div>
    <div class="todo" v-if="note" :class="{completed: note.completed}">
      <div class="data">
        <span>Title: {{note.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { NotesService } from "@/services/notes.js";

export default {
  props: {
    id: {
      type: [Number, String]
    }
  },
  data() {
    return {
      note: undefined
    };
  },
  async created() {
    this.note = await NotesService.GetNoteByID(this.id);
  },
  methods: {
    GoBack() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style scoped>
.todo {
  border: 3px solid red;
  padding: 20px;
  box-sizing: border-box;
}

.todo.completed {
  border: 3px solid green;
}
.loading,
.notAvailable {
  text-align: center;
}
.back {
  cursor: pointer;
  margin-bottom: 10px;
}
</style>

