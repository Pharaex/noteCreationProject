<template>
  <div class="note bg-blue-500 mt-4 ml-4 max-w-2xl">
    <table class="note-card w-full border border-black rounded p-4">
      <tr class="bg-blue-600 text-white text-center">
        <th class="py-2 px-4">Author</th>
        <th class="py-2 px-4">Title</th>
        <th class="py-2 px-4">Body</th>
        <th class="py-2 px-4"></th>
      </tr>
      <tr class="bg-white text-center border border-black">
        <td class="py-2 px-4">{{ note?.author }}</td>
        <td class="py-2 px-4">{{ note?.title }}</td>
        <td class="note-body py-2 px-4">
          {{ shortenedBody }}
        </td>
        <td class="button-cell py-2 px-4">
          <div class="flex">
            <button
              class="action-button font-semibold bg-gray-500 hover:bg-gray-600 text-white border-black border p-2 rounded-full"
              @click="handleOpenNote"
            >
              View
            </button>
            <button
              class="action-button font-semibold bg-orange-500 hover:bg-orange-600 text-white border-black border p-2 rounded-full mx-2"
              @click="deleteNote"
            >
              Delete
            </button>
          </div>
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
