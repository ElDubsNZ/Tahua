const Main = new Vue({
    store: Store,
    router: new VueRouter({
        routes: [
            {
                name: "Home",
                default: true,
                component: {
                    template: "#route-home",
                    default: true,
                    path: "/"
                },
                path: "/",
                props: true
            },
            {
                name: "Expenses",
                component: {
                    template: "#route-expenses",
                    path: "/Expenses"
                },
                path: "/Expenses",
                props: true
            }
        ]
    }),
    methods: {

    },
    el: '#budget'
})

function uuid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}