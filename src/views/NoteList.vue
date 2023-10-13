<template>
  <div>
    <FilterNote @applyFilter="setFilterText" />
    <AddNote />
    <Note
      :note="note"
      v-for="note in filteredNotes"
      :key="note.id"
      @delete-note="handleDeleteNote"
    />
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
