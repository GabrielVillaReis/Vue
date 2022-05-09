<template>
  <the-header></the-header>
  <section-choose @select-section="selectSection"></section-choose>
  <ul v-if="selectedSection == 0">
    <stored-resources
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
      @delete-resource="deleteResource"
    ></stored-resources>
  </ul>
  <keep-alive>
    <add-resources
      v-if="selectedSection == 1"
      @add-resource="addResource"
    ></add-resources>
  </keep-alive>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import StoredResources from './components/StoredResources.vue';
import AddResources from './components/AddResources.vue';
import SectionChoose from './components/SectionChoose.vue';
export default {
  components: {
    TheHeader,
    StoredResources,
    AddResources,
    SectionChoose,
  },
  data() {
    return {
      selectedSection: 0,
      resources: [
        {
          id: 0,
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 1,
          title: 'Google',
          description: 'Learn to Google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  methods: {
    deleteResource(resourceId) {
      this.resources = this.resources.filter((res) => res.id !== resourceId);
    },
    addResource(newtitle, newdescription, newlink) {
      const newresource = {
        id: this.resources.length,
        title: newtitle,
        description: newdescription,
        link: newlink,
      };
      this.resources.push(newresource);
    },
    selectSection(value) {
      this.selectedSection = value;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>