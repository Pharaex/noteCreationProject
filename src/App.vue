<template>
  <div>
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

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>
