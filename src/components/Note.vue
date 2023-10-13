<template>
  <div class="note">
    <table class="note-card">
      <tr>
        <th>Author</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <tr>
        <td>{{ note?.author }}</td>
        <td>{{ note?.title }}</td>
        <td class="note-body">{{ shortenedBody }}</td>
        <td class="button-cell">
          <button class="action-button delete-button" @click="deleteNote">
            Delete
          </button>
          <button class="action-button view-button" @click="handleOpenNote">
            View
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup>
import { computed } from "vue";
import router from "@/router";

const props = defineProps(["note"]);
const emits = defineEmits();

const shortenedBody = computed(() => {
  const body = props.note?.body;
  if (!body) {
    return "";
  }

  return body.length > 100 ? body.slice(0, 100) + "..." : body;
});

const deleteNote = () => {
  emits("delete-note", props.note);
};

const handleOpenNote = () => {
  router.push(`/note/${props.note.id}`);
};
</script>
<style scoped>
.note {
  margin-bottom: 20px;
}

.note-card {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  width: 100%;
}

.note-card th {
  background-color: #333;
  color: white;
}

.note-body {
  word-break: break-word;
}

.button-cell {
  text-align: center;
  margin-top: 10px;
}

.action-button {
  padding: 5px 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.action-button.delete-button {
  background-color: #ff5733;
  color: white;
}

.action-button.view-button {
  background-color: #337ab7;
  color: white;
}

.action-button.delete-button:hover {
  background-color: #e04128;
}

.action-button.view-button:hover {
  background-color: #2d6098;
}
</style>
