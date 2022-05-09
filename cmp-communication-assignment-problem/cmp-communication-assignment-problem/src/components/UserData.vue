<template>
  <div>
    <section>
      <h3>{{ name }}</h3>
      <h3>{{ age }}</h3>
    </section>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {};
  },
};
</script>