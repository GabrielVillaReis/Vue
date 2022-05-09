<template>
  <form @submit.prevent="addNewResource">
    <div>
      <label><strong>Title</strong></label>
      <input type="text" v-model="title" />
    </div>
    <div>
      <label>Description</label> <input type="text" v-model="description" />
    </div>
    <div><label>Link</label> <input type="url" v-model="link" /></div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      link: '',
    };
  },
  methods: {
    addNewResource() {
      if (this.title == '' || this.description == '' || this.link == '') {
        alert('Por favor preencha todos os campos corretamente');
      } else {
        this.$emit('add-resource', this.title, this.description, this.link);
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
</style>