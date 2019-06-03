<template>
  <div class="resume-layout">
    <no-ssr><Menu v-if="getWindowWidth <= 700"/></no-ssr>
    <nuxt/>
  </div>
</template>

<script>
import Menu from "~/components/Menu.vue";
import {mapActions, mapGetters} from "vuex";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      ifMobile: false
    }
  },
  mounted() {
    window ? window.addEventListener('resize', this.windowResize) : null;
  },
  beforeDestroy() {
    window ? window.removeEventListener('resize', this.windowResize) : null;
  },
  computed: {
    ...mapActions([
      "setWindowWidth"
    ]),
    ...mapGetters([
      "getWindowWidth"
    ])
  },
  methods: {
    ifNarrow() {
      return window ? window.innerWidth <= 700 : false;
    },
    windowResize(e) {
      this.$store.dispatch("setWindowWidth", e.target.innerWidth);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap");

@font-face {
  font-family: 'iconfont';  /* project id 1223316 */
  src: url('//at.alicdn.com/t/font_1223316_qkp0q2zn5t.eot');
  src: url('//at.alicdn.com/t/font_1223316_qkp0q2zn5t.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1223316_qkp0q2zn5t.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1223316_qkp0q2zn5t.woff') format('woff'),
  url('//at.alicdn.com/t/font_1223316_qkp0q2zn5t.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1223316_qkp0q2zn5t.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: inherit;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
div,
hr,
h1,
h2,
h3,
h4,
h5,
span,
p,
li,
ul,
section,
a {
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  position: relative;
  box-sizing: border-box;
  font-size: 100%;
  font-family: inherit;
  text-decoration: none;
}

html {
  font-family: "Barlow Condensed", sans-serif;
  color: #24292e;
}
body {
  background-color: #24292e;
}

html,
body,
body > :first-child,
body > :first-child > :first-child,
.resume-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page-enter-active,
.page-leave-active {
  transition: all 650ms;
  transform-style: preserve-3d;
}
.page-leave-active,
.page-enter {
  transform: translateY(-180%);
}

@media(max-width: 700px) {
  body {
    background-color: white;
  }
  .page-leave-active {
    transform: translateY(100%);
  }
  .page-enter {
    transform: translateY(100%);
  }
  .resume-layout {
    padding-bottom: 60px;
  }
}
</style>

