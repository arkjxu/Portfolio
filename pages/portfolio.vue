<template>
  <transition>
    <div class="porfolio">
      <section class="projects">
        <div class="project-list">
          <div class="project-container" v-for="(p, i) in projects" :key=i>
          <div class="p-logo" :style="{backgroundImage: 'url(' + p.logo + ')'}"></div>
          <div class="p-info">
            <h4 class="p-title">{{p.name}}</h4>
            <span class="p-status">{{p.status}}</span>
            <p class="p-description">{{p.description}}</p>
          </div>
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
import Projects from "@/static/projects.json";
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
.projects, .porfolio {
  display: flex;
}
.porfolio {
  background-color: white;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.project-list {
  padding: 100px 200px 100px 100px;
  overflow: auto;
  width: 100%;
  display: flex;
  height: 100%;
  flex-flow: column;
}
.projects {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  flex-flow: row wrap;
}
.project-container {
  display: flex;
  width: 100%;
  min-height: 350px;
  min-width: 325px;
  box-shadow: 0 0 1px 0 black;
  margin: 10px 0;
  overflow: auto;
}
.p-info {
  width: 100%;
  padding: 40px 20px;
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
  width: 50%;
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
@media(max-width: 970px) {
  .p-info {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(199, 199, 199, 0.342);
  }
  .p-logo {
    width: 100%;
  }
}
@media(max-width: 700px) {
  .porfolio {
    padding: 10px 20px;
  }
  .p-info {
    position: absolute;
    width: 100%;
    height: fit-content;
    background-color: rgba(199, 199, 199, 0.342);
  }
  .project-list {
    padding-right: 100px;
  }
  .p-logo {
    width: 100%;
  }
  .project-container {
    display: flex;
    width: 100%;
    min-height: 350px;
    min-width: 100%;
    box-shadow: 0 0 1px 0 black;
    margin: 10px 0;
  }
}
</style>
