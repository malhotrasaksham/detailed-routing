<template>
  <div class="search">
    <div class="control">
      <label>Name:</label>
      <select
        name="users"
        id="users"
        @change="DropdownChanged()"
        v-if="users"
        v-model="selectedUser"
      >
        <option :value="null">--select--</option>
        <option :value="user" v-for="user in users" :key="user.id">{{user.name}}</option>
      </select>
    </div>
    <div class="stickers">
      <span
        class="sticker"
        v-for="user in selectedUsers"
        @click="RemoveFilter(user.id)"
        :key="user.id"
      >{{user.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedUser: null,
      selectedUsers: [],
      todos: undefined
    };
  },
  props: {
    users: Array
  },
  methods: {
    DropdownChanged() {
      if (
        this.selectedUser !== null &&
        this.selectedUsers.findIndex(val => val.id === this.selectedUser.id) ===
          -1
      ) {
        this.selectedUsers.push({ ...this.selectedUser });
        this.$emit("update:selectedUsers", this.selectedUsers);
      }
    },
    RemoveFilter(id) {
      this.selectedUsers.splice(
        this.selectedUsers.findIndex(user => user.id === id),
        1
      );
    }
  }
};
</script>
<style scoped>
.control {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.control select {
  flex: 1;
  padding: 5px;
  margin-left: 10px;
}

.stickers {
  margin-bottom: 20px;
}

.sticker {
  background-color: #0072bc;
  color: #fff;
  font-size: 0.7em;
  padding: 7px;
  padding-right: 25px;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
}

.sticker:after {
  content: "X";
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0%, -50%);
}
</style>
