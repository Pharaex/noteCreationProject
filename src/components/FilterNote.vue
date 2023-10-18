<template>
  <div
    class="filter-note mt-4 ml-4 border p-4 rounded border-black w-auto max-w-md"
  >
    <input
      class="filter-input w-56"
      v-model="filter"
      placeholder="🔍 Search Author or Title"
    />
    <button
      class="filter-button font-semibold find w-20 rounded-full text-yellow-50 bg-gray-500 hover:bg-gray-600 ml-2"
      @click="applyFilter"
    >
      Search
    </button>
    <button
      class="filter-button font-semibold clear w-20 rounded-full text-yellow-50 bg-orange-500 hover:bg-orange-600 ml-2"
      @click="clearFilter"
    >
      Clear
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const filter = ref("");
const emits = defineEmits(["applyFilter"]);

const applyFilter = () => {
  emits("applyFilter", filter.value);
};

const clearFilter = () => {
  filter.value = "";
  emits("applyFilter", filter.value);
};
</script>
<style scoped></style>
