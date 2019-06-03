<template>
  <div class="interactions">
    <section class="contact-info">
      <div id="avatar"></div>
      <p class="c-field">Kevin Xu</p>
      <p class="c-field"><a href="mailto:kevinjw.xu@gmail.com">Kevinjw.xu@gmail.com</a></p>
      <p class="c-field">Klamath Falls, OR</p>
      <p class="c-field c-more">For more information, please checkout my resume.</p>
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
.interactions, .contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
}
.interactions {
  height: 100%;
  width: 100%;
  background-color: white;
}
.contact-info {
  flex-flow: column;
}
.c-field {
  padding: 10px 0;
}
.c-field a {
  color: rgb(0, 153, 255);
}
#avatar {
  width: 128px;
  height: 128px;
  background-image: url('/img/kevin.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: 0px 30px 60px rgba(0,0,0,0.25);
}
.c-more {
  opacity: 0.5;
}
</style>

