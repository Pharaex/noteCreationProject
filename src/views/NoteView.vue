<template>
  <div class="note-view">
    <div class="note-info">
      <label class="info-label">Author:</label>
      <p class="info-text">{{ note.author }}</p>
    </div>
    <div class="note-info">
      <label class="info-label">Title:</label>
      <p class="info-text">{{ note.title }}</p>
    </div>
    <div class="note-info">
      <label class="info-label">Body:</label>
      <p class="note-body">{{ note.body }}</p>
    </div>
  </div>
</template>
<script setup>
import Note from "@/components/Note.vue";
import { useMainStore } from "@/stores/mainStore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const note = ref({});
const mainStore = useMainStore();

onMounted(() => {
  note.value = mainStore.getNote(route.params.id);
});
</script>

<style scoped>
.note-view {
  margin: 20px 0;
}

.note-info {
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
  color: #333;
}

.info-text {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.note-body {
  word-break: break-word;
}
</style>
