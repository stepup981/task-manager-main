<script>
import { mapMutations } from "vuex";
import ButtonTask from "@/components/UI/ButtonTask.vue";

export default {
  components: {
    ButtonTask,
  },
  data: () => ({
    newTask: "",
  }),

  methods: {
    ...mapMutations(["addTask"]),
    addTaskOnList() {
      if (!this.newTask.trim()) return;

      const task = { id: Date.now(), name: this.newTask, editing: false };
      this.addTask(task);
      this.newTask = "";
    },
  },
};
</script>

<template>
  <form class="add-task" @submit.prevent="addTaskOnList">
    <input
      v-model="newTask"
      placeholder="The quick brown fox jumps over the lazy dog."
      type="text"
      class="add-task__input"
    />
    <ButtonTask add />
  </form>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.add-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  &__input {
    @include task;
  }
}

@media (max-width: 680px) {
  .add-task {
    flex-direction: column;
    align-items: normal;
  }
}
</style>
