<template>
  <h2>Insira seu nome e sua idade:</h2>
  <form @submit.prevent="submitData">
    <div>
      <label>Nome</label>
      <input
        type="name"
        onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)"
        v-model="name"
      />
    </div>
    <div>
      <label>Idade</label>
      <input type="number" v-model="age" />
    </div>
    <button>Settar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null,
    };
  },
  methods: {
    submitData() {
      if (this.name.length > 0 && this.age != null) {
        this.$emit("add-data", this.name, this.age);
      }
    },
  },
};
</script>