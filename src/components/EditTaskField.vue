<script>
import { mapState, mapMutations } from "vuex";
import ButtonTask from "@/components/UI/ButtonTask.vue";

export default {
  components: {
    ButtonTask,
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    ...mapMutations(["addTask", "deleteTask", "removeAll"]),
    editTask(task) {
      task.editing = true;
      this.$nextTick(() => {
        const input = document.querySelector("#inputTask");
        if (input) input.focus();
      });
    },
    saveTask(task) {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
      const taskIndex = savedTasks.findIndex((item) => item.id === task.id);

      savedTasks[taskIndex].name = task.name;
      localStorage.setItem("tasks", JSON.stringify(savedTasks));

      if (task.name !== "") {
        task.editing = false;
      } else {
        this.deleteTask(task.id);
      }
    },
  },
  mounted() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      savedTasks.forEach((task) => {
        this.addTask(task);
      });
    }
  },
};
</script>

<template>
  <div class="edit-task">
    <div class="edit-task__removeall">
      <div class="edit-task__title">Task list</div>
      <ButtonTask @click="removeAll" removeall></ButtonTask>
    </div>

    <div class="edit-task__block">
      <ul class="edit-task__tasks-list">
        <li class="edit-task__list-item" v-for="task in tasks" :key="task.id">
          <div class="edit-task__task" v-if="!task.editing">
            {{ task.name }}
          </div>
          <textarea
            v-else
            v-model="task.name"
            class="edit-task__text-task"
            type="text"
            id="inputTask"
            @keyup.enter="saveTask(task)"
          />
          <div class="edit-task__btn-block">
            <ButtonTask
              v-if="!task.editing"
              edit
              @click="editTask(task)"
            ></ButtonTask>
            <ButtonTask v-else @click="saveTask(task)" save></ButtonTask>
            <ButtonTask @click="deleteTask(task.id)" remove></ButtonTask>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.edit-task {
  &__removeall {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    margin-bottom: 16px;
  }
  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 26px;
  }

  &__btn-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &__tasks-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  &__task {
    @include task;
  }

  &__text-task {
    resize: none;
    min-height: 70px;

    @include task;
  }
}

@media (max-width: 680px) {
  .edit-task {
    &__removeall {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    &__tasks-list {
      gap: 20px;
    }

    &__list-item {
      flex-direction: column;
      justify-content: start;
      align-items: normal;
    }

    &__btn-block {
      justify-content: start;
    }
  }
}
</style>
