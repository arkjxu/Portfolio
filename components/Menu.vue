<template>
    <div class="menu">
        <span class="m-options">
            <nuxt-link class="m-links" to="/" exact>About</nuxt-link>
        </span>
        <span class="m-options">
            <nuxt-link class="m-links" to="/portfolio">Portfolio</nuxt-link>
        </span>
        <span class="m-options">
            <a href="/Resume.pdf" target="_blank" class="m-links">Resume</a>
        </span>
        <span class="m-options">
            <nuxt-link class="m-links" to="/interaction">Interaction</nuxt-link>
        </span>
        <span class="m-options">
            <nuxt-link class="m-links" to="links">Links</nuxt-link>
        </span>
    </div>
</template>

<script>
export default {
}
</script>


<style scoped>
.menu {
    opacity: 0;
    position: absolute;
    right: 50px;
    top: 50%;
    max-width: 50px;
    z-index: 999;
    transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
    -moz-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
    animation: FadeInRight 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
    -webkit-animation: FadeInRight 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
    -moz-animation: FadeInRight 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
    -o-animation: FadeInRight 1s cubic-bezier(0.5, 0, 0.525, 2) forwards;
    animation-delay: 300ms;
}
.m-options {
    margin: 2px 0;
    height: 40px;
    text-align: end;
    width: 60px;
    text-transform: uppercase;
    font-size: 11pt;
    font-weight: 300;
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.m-links::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 1px;
    background-color: black;
    transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
    -moz-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
    -o-transition: all 700ms cubic-bezier(0.77, 0, 0.175, 1);
}
.m-links:hover::before{
    width: 60px;
    background-color: rgb(255, 89, 89);
}
.m-links {
    padding: 5px 0;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}
.nuxt-link-exact-active:hover::before {
    background-color: rgba(0,136,255,1);
}
.nuxt-link-exact-active::before {
    width: 60px;
    background-color: rgba(0,136,255,1);
}
@keyframes FadeInRight {
    0% {
        opacity: 0;
        transform: translateX(100px);
        -webkit-transform: translateX(100px);
        -o-transform: translateX(100px);
        -moz-transform: translateX(100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
        -webkit-transform: translateX(0);
        -o-transform: translateX(0);
        -moz-transform: translateX(0);
    }
}
@media (max-width: 700px) {
    .menu {
        position: fixed;
        bottom: -3px;
        left: 0;
        right: initial;
        top: initial;
        display: flex;
        flex-flow: row nowrap;
        animation: none;
        opacity: 1;
        width: 100%;
        max-width: 100%;
        justify-content: space-around;
        align-items: center;
    }
    .m-options {
        width: 100%;
        height: 60px;
        background-color: #24292e;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .m-links {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }
    .m-links::before {
        display: none;
    }
}
</style>
