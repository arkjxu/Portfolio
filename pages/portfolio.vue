<template>
  <transition>
    <div class="porfolio">
      <section class="projects">
        <div class="project-container" v-for="(p, i) in projects" :key=i>
          <div class="p-logo" :style="{backgroundImage: 'url(' + p.logo + ')'}"></div>
          <div class="p-info">
            <h4 class="p-title">{{p.name}}</h4>
            <span class="p-status">{{p.status}}</span>
          </div>
        </div>
      </section>
      <Trail/>
      <no-ssr><Menu v-if="getWindowWidth > 700"/></no-ssr>
    </div>
  </transition>
</template>

<script>
import Menu from "~/components/Menu.vue";
import Trail from "~/components/Trail.vue";
import Projects from "@/static/data/projects.json";
import {mapGetters} from "vuex";
export default {
  components: {
    Menu,
    Trail
  },
  transition: {
    duration: 600
  },
  computed: {
    ...mapGetters([
      "getWindowWidth"
    ])
  },
  data() {
    return {
      projects: Projects,
    }
  }
};
</script>

<style scoped>
.porfolio, .project-container, .p-info {
  display: flex;
}
.porfolio, .p-info, .projects {
  width: 100%;
}
.porfolio, .projects {
  height: 100%;
}
.porfolio {
  background-color: white;
  justify-content: center;
  align-items: center;
}
.projects {
  padding: 0 10px;
  overflow: auto;
  padding: 100px 0;
}
.project-container {
  margin: 20px 0;
  align-items: center;
  justify-content: center;
}
.p-info, .project-container {
  flex-flow: column;
  height: fit-content;
}
.p-title, .p-status {
  text-align: center;
} 
.p-status {
  opacity: 0.6;
}
.p-title {
  font-size: 2vmax;
}
.p-description {
  padding: 20px 0;
  line-height: 40px;
}
.p-logo {
  width: 256px;
  min-height: 256px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(228, 228, 228);
}
</style>
