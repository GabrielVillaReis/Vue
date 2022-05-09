<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button @click="$emit('delete-resource', id)">
          <strong>Delete</strong>
        </button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
};
</script>

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

li {
  list-style: none;
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: transparent;
  color: #3a0061;
  border: none;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #edd2ff;
}
</style>

header {
  padding: -100000000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  position: absolute;
  right: 15px;
  font-size: 130%;
  background-color: lightgrey;
  border: lightgrey;
}
p {
  margin-top: 5px;
}
a {
  text-decoration: none;
  color: orangered;
}
li {
  font-size: 20px;
  margin-left: -40px;
  width: auto;
  list-style: none;
  background: lightgrey;
  box-shadow: black;
  margin-bottom: 10px;
}