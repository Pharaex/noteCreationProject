<template>
  <div class="add-note mt-4 ml-4 border p-4 rounded border-black max-w-md">
    <div class="flex flex-col">
      <label class="form-label font-bold mb-2 text-gray-700">Author:</label>
      <input
        class="form-input mb-4 p-2 border border-black rounded"
        type="text"
        v-model="formData.author"
      />
      <label class="form-label font-bold mb-2 text-gray-700">Title:</label>
      <input
        class="form-input mb-4 p-2 border border-black rounded"
        type="text"
        v-model="formData.title"
      />
      <label class="form-label font-bold mb-2 text-gray-700">Body:</label>
      <textarea
        class="form-input mb-4 p-2 border border-black rounded resize-y"
        v-model="formData.body"
        rows="4"
      ></textarea>
    </div>
    <div class="form-submit mt-5">
      <button
        class="submit-button font-semibold bg-gray-500 text-white border-black border p-3 rounded-full cursor-pointer shadow-md hover:bg-gray-600"
        @click="handleSubmit"
      >
        Submit Note
      </button>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/stores/mainStore";
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const formData = reactive({
  author: "",
  title: "",
  body: "",
});

const mainStore = useMainStore();

const rules = {
  author: { required },
  title: { required },
  body: { required },
};

const v$ = useVuelidate(rules, formData);

const handleSubmit = async () => {
  const result = await v$.value.$validate();
  if (!result) {
    alert("You fucked up something.");
  }

  if (formData.author && formData.title && formData.body) {
    mainStore.addNotes(formData);
    formData.author = "";
    formData.title = "";
    formData.body = "";
  }
};
</script>

<style scoped></style>
