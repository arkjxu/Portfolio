<template>
  <div class="links">
    <section class="socials">
      <a
        href="https://www.instagram.com/_arkjxu/"
        target="_blank"
        class="social iconfont"
      >&#xe6ec;</a>
      <a
        href="https://www.linkedin.com/in/kevinjia-xu"
        target="_blank"
        class="social iconfont"
      >&#xe65c;</a>
      <a
        href="https://github.com/arkjxu"
        target="_blank"
        class="social iconfont"
      >&#xe709;</a>
      <a
        href="https://join.slack.com/t/ark-c1x2986/shared_invite/enQtNjU1MTY3OTkyOTUwLTczYzA4MWRjMGQzNTU2MDJmZTUwNGIwYWVmNzk5ZGFlMjRiZWRmOGJiNWFkOWU4NzMzNGE4MzVmNmE5MTc1NGU"
        target="_blank"
        class="social iconfont"
      >&#xe789;</a>
    </section>
    <Trail/>
    <no-ssr><Menu v-if="getWindowWidth > 700"/></no-ssr>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Trail from "@/components/Trail.vue";
import {mapGetters} from "vuex";
export default {
  components: {
    Menu,
    Trail
  },
  computed: {
    ...mapGetters([
      "getWindowWidth"
    ])
  },
  transition: {
    duration: 600
  }
};
</script>

<style scoped>
.socials, .links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.links {
  height: 100%;
  width: 100%;
  background-color: white;
}
.social {
  margin: 0 10px;
  box-shadow: 0 0 1px 0 black;
  padding: 15px;
  border-radius: 50%;
  font-size: 16pt;
}
</style>

