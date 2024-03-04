import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
      const updatedTasks = savedTasks.filter((task) => task.id !== payload);

      if (!updatedTasks.length) {
        localStorage.clear("tasks");
      } else {
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      }
    },
    removeAll(state) {
      state.tasks = [];
      localStorage.clear("tasks");
    },
  },
  actions: {},
  modules: {},
});
