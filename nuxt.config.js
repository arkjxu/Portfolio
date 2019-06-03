export default {
    head: {
        title: 'Kevin Xu',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description', 
                name: 'description',
                content: "Software, Web, Full, Stack, Full-stack, Full Stack, Fullstack, Engineer",
            }
        ]
    },
    layout: {
        layout: "default",
    },
    modules: [
    ],
    build: {
        analyze: true,
    },
    plugins: [
        {
            src:  "~/plugins/vue-typer",
            ssr: false,
        },
    ],
    router: {
        middleware: ['device']
    }
}