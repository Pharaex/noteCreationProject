<template>
  <div class="bg-blue-500 flex flex-col">
    <FilterNote @applyFilter="setFilterText" class="mb-4 max-w-4" />
    <AddNote class="mb-4 max-w-4" />
    <div>
      <Note
        :note="note"
        v-for="note in filteredNotes"
        :key="note.id"
        @delete-note="handleDeleteNote"
      />
    </div>
  </div>
</template>

<script setup>
import FilterNote from "@/components/FilterNote.vue";
import Note from "@/components/Note.vue";
import { useMainStore } from "@/stores/mainStore";
import { ref, computed } from "vue";
import router from "@/router";
import AddNote from "@/components/AddNote.vue";

const mainStore = useMainStore();
const filterText = ref("");

const handleDeleteNote = (noteToDelete) => {
  mainStore.deleteNote(noteToDelete);
};

const handleOpenNote = (noteID) => {
  router.push(`/note/${noteID}`);
};

const filteredNotes = computed(() => {
  return mainStore.filterNotes(filterText.value);
});

const setFilterText = (text) => {
  filterText.value = text;
};
</script>
