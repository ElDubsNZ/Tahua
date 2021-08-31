const TahuaStore = new Vuex.Store({
    state: {
        toolData: {
            app: {
                version: "0.01a",
                updated: "2021-08-31",
                title: "Tahua"
            }
        },
        router: {
            home: { value: "" },
            expenses: { value: "" },
        }
    },
    getters: {

        //Router
            tab_home: state => state.router.home.value,
            tab_expenses: state => state.router.expenses.value,

        //Standard Information

            frequencies: () => {
                items = []
                types = general.frequencies
                for (const key of Object.keys(types)) {
                    var item = types[key]
                    item.value = key
                    items.push(item)
                }
                return items
            },
    },
    mutations: {

        //Router
            tab_home: (state, val) => state.router.home.value = val,
            tab_expenses: (state, val) => state.router.expenses.value = val,
    }
})
