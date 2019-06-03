export default function (context) {
    context.isMobile = (process.client) ? window.matchMedia("(min-width: 1000px)") : false;
}
