<template>
  <transition>
    <div class="resume">
      <section class="intro">
        <div class="intro-field">
          <no-ssr>
            <vue-typer
              caretAnimation="blink"
              :eraseDelay="70"
              :preTypeDelay="1000"
              eraseStyle="backspace"
              :text="[
                            'Software Engineer', 
                            'Full-Stack Developer',
                            'Food Hobbyist?',
                        ]"
            ></vue-typer>
          </no-ssr>
        </div>
        <div class="social-list">
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
          <a href="mailto:kevinjw.xu@gmail.com" target="_blank" class="social iconfont">&#xe602;</a>
        </div>
        <div class="author-info">
          <h1 class="author-name">Kevin Xu</h1>
          <div class="author-location">
            <i class="iconfont">&#xeca9;</i>
            <span class="location-name">Klamath Falls, OR</span>
          </div>
        </div>
      </section>
      <Trail/>
      <no-ssr><Menu v-if="getWindowWidth > 700"/></no-ssr>
    </div>
  </transition>
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
.resume {
  background-color: white;
}
.resume,
.intro {
  height: 100%;
  width: 100%;
}
.resume,
.intro,
.intro-field,
.social-list,
.social,
#software,
#web {
  display: flex;
}
.resume,
.intro {
  flex-flow: column;
}
.intro,
.intro-field,
.social,
#software,
#web {
  justify-content: center;
  align-items: center;
}
.intro-field,
.social-list {
  flex-flow: row nowrap;
}
.intro-field {
  font-size: 3vmax;
}
.iden,
#software,
#web {
  height: 60px;
}
.iden {
  color: white;
  width: fit-content;
  overflow: hidden;
}
#software,
#web {
  padding-left: 5px;
  padding-right: 5px;
}
#software {
  background-color: #0088ff;
  animation: FlipText 3s cubic-bezier(0.5, 0, 0.175, 0.5) infinite alternate;
  -webkit-animation: FlipText 3s cubic-bezier(0.5, 0, 0.175, 0.5) infinite
    alternate;
  -o-animation: FlipText 3s cubic-bezier(0.5, 0, 0.175, 0.5) infinite alternate;
  -moz-animation: FlipText 3s cubic-bezier(0.5, 0, 0.175, 0.5) infinite
    alternate;
}
#web {
  background-color: rgb(255, 218, 52);
}
.field {
  text-align: center;
  padding: 10px;
}
.hello {
  font-size: 4vmax;
  text-transform: uppercase;
  padding: 25px 0;
}
.social-list {
  padding: 40px 0;
}
.social {
  width: 32px;
  height: 32px;
  box-shadow: 0 0 1px 0 rgb(13, 15, 39);
  border-radius: 50%;
  padding: 20px;
  font-size: 12pt;
  cursor: pointer;
  margin: 0 10px;
}
.author-info {
  opacity: 0;
  z-index: 1;
  color: #24292e;
  position: absolute;
  bottom: 50px;
  left: 70px;
  transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
  animation: FadeInLeft 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
  -webkit-animation: FadeInLeft 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
  -moz-animation: FadeInLeft 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
  -o-animation: FadeInLeft 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
  animation-delay: 300ms;
}
.author-name {
  font-size: 30pt;
  font-weight: 300;
}
.author-location {
  font-size: 10pt;
  opacity: 0.5;
}

@keyframes FadeInLeft {
  0% {
    transform: translateX(-100px);
    -webkit-transform: translateX(-100px);
    -o-transform: translateX(-100px);
    -moz-transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -o-transform: translateX(0);
    -moz-transform: translateX(0);
  }
}
@media(max-width: 700px) {
  .author-info {
    bottom: 70%;
    left: calc(50% - 55px);
  }
}
</style>