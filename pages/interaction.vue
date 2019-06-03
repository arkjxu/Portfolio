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
  opacity: 0;
  transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  animation: FadeIn 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
  -webkit-animation: FadeIn 1s cubic-bezier(0.5, 0, 0.525, 1.5) forwards;
  -moz-animation: FadeIn 1s cubic-bezier(0.5, 0, 0.525, 1.5) forwards;
  -o-animation: FadeIn 1s cubic-bezier(0.5, 0, 0.525, 1.5) forwards;
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
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  animation: SpinFade 1s cubic-bezier(0.5, 0, 0.525, 1.5) forwards;
  -webkit-animation: SpinFade 1s cubic-bezier(0.5, 0, 0.525, 1.5) forwards;
  -moz-animation: SpinFade 1s cubic-bezier(0.5, 0, 0.525, 1.5) forwards;
  -o-animation: SpinFade 1s cubic-bezier(0.5, 0, 0.525, 1.5) forwards;
  transform-origin: center;
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -o-transform-origin: center;
  animation-delay: 600ms;
  -webkit-animation-delay: 600ms;
  -moz-animation-delay: 600ms;
  -o-animation-delay: 600ms;
}
.c-more {
  opacity: 0.5;
}
@keyframes FadeIn {
  0% {
    transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -o-transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -o-transform: translateY(0);
  }
}
@keyframes SpinFade {
  100% {
    box-shadow: 0px 30px 60px rgba(0,0,0,0.25);
  }
}
</style>

