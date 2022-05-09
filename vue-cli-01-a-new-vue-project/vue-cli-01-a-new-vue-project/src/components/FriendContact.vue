<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorito)" : "" }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <h2></h2>
    <button @click="toggleFavorite">Favoritar</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{ phone }}</li>
      <li><strong>Email:</strong>{{ email }}</li>
    </ul>
    <button @click="$emit('delete-contact', id)">Delete Contact</button>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "phone", "email", "isFavorite"],
  emits: ["toggleFavorite", "delete-contact"],
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>