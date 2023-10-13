<template>
  <div class="filter-note">
    <input
      class="filter-input"
      v-model="filter"
      placeholder="🔍 Search Author or Title"
    />
    <button class="filter-button find" @click="applyFilter">Search</button>
    <button class="filter-button clear" @click="clearFilter">Clear</button>
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
<style scoped>
.filter-note {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.filter-input {
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.filter-button {
  background-color: #0066a2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.filter-button.clear {
  background-color: #ff5733;
}

.filter-button.find:hover {
  background-color: #016abc;
}
</style>
