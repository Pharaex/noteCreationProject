import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
  const notes = ref([]);

  let lastNoteId = 0;

  const deleteNote = (noteToDelete) => {
    const index = notes.value.findIndex((note) => note.id === noteToDelete.id);
    if (index !== -1) {
      notes.value.splice(index, 1);
    }
  };

  const getNote = (noteID) => {
    const index = notes.value.findIndex((note) => note.id == noteID);
    return notes.value[index];
  };

  const filterNotes = (filterText) => {
    return notes.value.filter((note) => {
      return (
        String(note.author).toLowerCase().includes(filterText.toLowerCase()) ||
        String(note.title).toLowerCase().includes(filterText.toLowerCase())
      );
    });
  };

  const addNotes = (formData) => {
    const newNote = {
      id: ++lastNoteId, // Generate a new unique ID
      author: formData.author,
      title: formData.title,
      body: formData.body,
    };
    notes.value.push(newNote);
  };

  return {
    notes,
    deleteNote,
    getNote,
    filterNotes,
    addNotes,
  };
});
