<template>
  <div class="flex min-h-screen bg-blue-500">
    <router-view />
  </div>
</template>

<script>
import AddNote from "@/components/AddNote.vue";
import NoteList from "@/views/NoteList.vue";

export default {
  name: "App",
  components: { NoteList },
};
</script>

<style src="./style.css"></style>
