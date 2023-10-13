<template>
  <div class="add-note-form">
    <label class="form-label">Author:</label>
    <input class="form-input" type="text" v-model="formData.author" />
    <label class="form-label">Title:</label>
    <input class="form-input" type="text" v-model="formData.title" />
    <label class="form-label">Body:</label>
    <textarea class="form-input" v-model="formData.body" rows="4"></textarea>
    <div class="form-submit">
      <button class="submit-button" @click="handleSubmit">Submit Note</button>
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

<style scoped>
.add-note-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-input.textarea {
  resize: vertical;
}

.form-submit {
  margin-top: 20px;
}

.submit-button {
  background-color: #0066a2;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 5px 5px 5px #eee;
}

.submit-button:hover {
  background-color: #016abc;
}
</style>
