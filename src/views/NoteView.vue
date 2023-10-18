<template>
  <div class="note-view min-h-screen bg-slate-500">
    <div class="note-info">
      <div class="flex bg-blue-300 p-2">
        <label class="info-label text-black font-semibold">Author:</label>
        <p class="info-text text-black font-sans ml-2">{{ note.author }}</p>
      </div>
    </div>
    <div class="note-info">
      <div class="flex border-b border-black bg-blue-300 p-2">
        <label class="info-label text-black font-semibold">Title:</label>
        <p class="info-text text-black font-sans ml-2">{{ note.title }}</p>
      </div>
    </div>
    <div class="note-info p-2">
      <p class="note-body text-white font-serif">{{ note.body }}</p>
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
