<script>
export default {
  props: {
    add: {
      type: Boolean,
      default: false,
    },
    edit: {
      type: Boolean,
      default: false,
    },
    remove: {
      type: Boolean,
      default: false,
    },
    removeall: {
      type: Boolean,
      default: false,
    },
    save: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <button
    type="submit"
    class="btn"
    :class="{
      add: add,
      edit: edit,
      remove: remove,
      removeall: removeall,
      save: save,
    }"
  >
    <span v-if="removeall">Remove all</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 8px;
  cursor: pointer;
  border: none;
  font-size: 14px;

  &::before {
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    transform: scale(1.05);
    background-color: var(--primary-color-orange);
  }
}

.add {
  &::before {
    content: url("@/assets/add.svg");
  }
}

.edit {
  &::before {
    content: url("@/assets/edit.svg");
  }
}

.remove,
.removeall {
  &::before {
    content: url("@/assets/delete.svg");
  }
}

.save {
  &::before {
    content: url("@/assets/done.svg");
  }
}

@media (max-width: 680px) {
  .btn {
    gap: 5px;
    max-width: 50%;
  }
}
</style>
