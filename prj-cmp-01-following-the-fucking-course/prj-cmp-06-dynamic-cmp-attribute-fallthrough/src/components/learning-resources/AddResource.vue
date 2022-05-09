<template>
  <h2>Add Resource</h2>
  <base-dialog v-if="invalidInput" @close="confirmError" title="Invalid Input">
    <template #default>
      <p>Something gone wrong</p>
      <p></p>
      <p>Make sure you field every input correctly</p>
    </template>
    <template #actions>
      <base-button @click="confirmError"> OK </base-button>
    </template>
  </base-dialog>

  <base-card>
    <form @submit.prevent="submitResource">
      <div class="form-control">
        <label for="title"><strong>Title</strong></label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="linkInput" />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
  inject: ['addResource'],
  data() {
    return {
      invalidInput: false,
    };
  },
  methods: {
    submitResource() {
      const titlevalue = this.$refs.titleInput.value;
      const descvalue = this.$refs.descInput.value;
      const linkvalue = this.$refs.linkInput.value;

      if (
        titlevalue.trim() === '' ||
        descvalue.trim() === '' ||
        linkvalue.trim() === ''
      ) {
        this.invalidInput = true;
      } else {
        this.addResource(titlevalue, descvalue, linkvalue);
      }
    },
    confirmError() {
      this.invalidInput = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

h2 {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>