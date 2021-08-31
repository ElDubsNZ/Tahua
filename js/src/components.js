Vue.component("tab-list", {
    props: ["route",],
    computed: {
        get() {return TahuaStore.getters},
        tab_home() {return this.get.tab_home},
        tab_expenses() {return this.get.tab_expenses}
    },
    template: `
        <div>
            <router-link :class="{'is-selected d_bg_select d_br_select d_clr_select': route == 'Home'}" :to="{ name: 'Home'}" class="button d_bg d_br d_clr is-small">Home</router-link>
            <router-link :class="{'is-selected d_bg_select d_br_select d_clr_select': route == 'Expenses'}" v-if="tab_expenses" :to="{ name: 'Expenses'}" class="button d_bg d_br d_clr is-small">Expenses</router-link>
        </div>
    `
})
Vue.component("budget-start", {
    computed: {
        get() {return TahuaStore.getters}
    },
    methods: {
        goTo_Expenses() {
            TahuaStore.commit("tab_expenses", true)
            Tahua._router.push({name: 'Expenses'})
        }
    },
    template: `
        <div>
            <ui-section :expandableSection="true" :hideSection="false">
                <div slot="heading">
                    <span>Home</span>
                </div>

                <div slot="body">
                    
                    <question>
                        <div slot="label" class="has-text-weight-normal" style="font-size: 1.05em">New Budget</div>
                        <div slot="input">
                            <button type="button" @click="goTo_Expenses()" class="button control is-default">
                                <span>Start</span>
                            </button>
                        </div>
                    </question>

                </div>
            </ui-section>
        </div>
    `
})
Vue.component("budget-expenses", {
    computed: {
        get() {return MINIStore.getters}
    },
    template: `
        <div>
            <ui-section :expandableSection="true" :hideSection="false">
                <div slot="heading">
                    <span>Expenses</span>
                </div>

                <div slot="body">
                    
                    

                </div>
            </ui-section>
        </div>
    `
})