<template>
  <div>
    <button
      v-for="sec in sections"
      :key="sec.key"
      @click="$emit('select-section', sec.value)"
    >
      {{ sec.key }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { key: 'Stored Resources', value: 0 },
        { key: 'Add New Resources', value: 1 },
      ],
    };
  },
};
</script>

<style scoped>
div {
  float: left;
  padding-top: 10px;
}

button {
  background-color: white;
  border: white;
}
button:hover,
button:active {
  background-color: grey;
}
</style>