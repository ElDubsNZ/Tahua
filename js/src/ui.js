Vue.component("ui-section", {
    props: ['hideSection', 'expandableSection'],
    data() {
        return {
            isOpen: !this.hideSection,
            isExpandable: this.expandableSection,
            cursorType: this.expandableSection ? 'pointer' : 'default'
        }
    },
    methods: {
        toggleSection(ref) { 
            if(this.isExpandable) {
                this.isOpen = !this.isOpen
            }
        }  
    },
    template: `
        <section class="field message is-dark" style="margin-bottom: 2rem;">
            <div  @click="toggleSection()" :style="{cursor: cursorType}" class="message-header c_bg c_br c_clr has-text-weight-normal">
                <span>
                    <slot name="heading"></slot>
                </span>
                
                <slot name="right">
                    <span v-if="isExpandable" style="cursor:pointer;">
                    <!-- Double wrapping required due to compatibility between fontawesome and vue -->
                        <div v-if="isOpen">
                            <div>
                                <i class="fas fa-minus-square"></i>
                            </div>
                        </div>
                        <div v-else>
                            <div>
                                <i class="fas fa-plus-square"></i>
                            </div>
                        </div>
                    </span>
                </slot>
            </div>
            <div class="message-body" :class="{'is-hidden' : !isOpen}"><slot name="body"></slot></div>
        </section>
    `
})
Vue.component("question", {
    computed: {
        input() {
            el = this.$refs.input.querySelector('INPUT')
            if (el == null) { el = this.$refs.input.querySelector('TEXTAREA') }
            if (el == null) { el = this.$refs.input.querySelector('SELECT') }
            if (el == null) { el = this.$refs.input.querySelector('BUTTON') }
            return el
        }
    },
    methods: {
        click: function (e) {
            if (this.input != null) {
                this.input.focus()
                if (this.input.tagName == "SELECT" || this.input.type == "checkbox") { this.input.click() }
            }
        },
        hover: function (e) {
            if (this.input != null) { if (this.input.tagName == "SELECT" || this.input.type == "checkbox") { this.input.focus() } }
        },
    },
    template: `
        <div class="field is-horizontal">
            <div class="Tahua-field-label">
                <label class="label">
                    <slot name="label"></slot>
                </label>
            </div>
            <div class="field-body Tahua-field"><slot name="pre-input"></slot><div class="control" ref="input"><slot name="input"></slot></div><slot name="info"></slot></div>
        </div>
    `
})
Vue.component("inputDate", {
    props: ["value", "options"],
    computed: {
        date: { get() { return this.value }, set() { } }
    },
    methods: {
        update(e) {
            date = moment(e.target.value, ["DD-MM-YYYY", "DD-MM-YY", "DD-MM", "DD"]).format("DD/MM/YYYY")
            this.$refs.input.value = date
            this.$emit("input", date)
        },
        focus() { this.$refs.input.focus() },
    },
    template: `
        <input style="width: 100%;" class="input input_date" id="input_date" v-model="date" ref="input" @click="$event.target.select()" @focus="$event.target.select()"  @keydown.enter.prevent @blur="update($event)" type="textbox" autocomplete="off" placeholder="date">
    `
})
Vue.component("inputName", {
    props: ["value", "options"],
    computed: {
        name: { get: function () { return this.value }, set: function () { } }
    },
    methods: {
        update: function (e) {
            name = Formats.formatTitleCase(e.target.value)
            this.$emit("input", name)
        },
        focus: function () { this.$refs.input.focus() }
    },
    template: `
        <input v-model="name" ref="input" @click="$event.target.select()" @focus="$event.target.select()" @input="update($event)" type="textbox" class="input" autocomplete="off" placeholder="name">
        `
})
Vue.component("inputMoney", {
    props: ["value", "options"],
    methods: {
        update(e) {
            money = Formats.formatMoney(e.target.value)
            this.$refs.input.value = money
            this.$emit("input", money)
        }
    },
    template: `
        <input class="input" ref="input" style="width: 100%;" :value="value" @click="$event.target.select()" @focus="$event.target.select()" @blur="update($event)" type="textbox" autocomplete="off" placeholder="$">
    `
})
Vue.component("inputNumber", {
    props: ["value", "options"],
    methods: {
        update(e) {
            number = Formats.formatNumber(e.target.value)
            this.$refs.input.value = number
            this.$emit("input", number)
        }
    },
    template: `
        <input class="input" ref="input" style="width: 100%;" :value="value" @click="$event.target.select()" @focus="$event.target.select()" @blur="update($event)" type="textbox" autocomplete="off" placeholder="number">
    `
})
Vue.component("inputSwitch", {
    model: { prop: "checked", event: "change" },
    props: { checked: Boolean, options: Object },
    methods: {
        update(e) { this.$emit("change", e.target.checked) },
        focus() { this.$refs.input.focus() },
    },
    computed: {
        che: { get() { return this.checked }, set() { } }
    },
    template: `
        <label class="switch control" style="min-width: 5rem">
            <input v-model="che" ref="input" @change="update($event)" id="options[id]" type="checkbox" class="input"><span></span>
        </label>
    `
})
Vue.component("inputRadio", {
    model: { prop: "checked", event: "change" },
    props: {name: String, value: String, check: Boolean, text: String, disable: Boolean},
    methods: {
        update(e) { this.$emit("change", e.target.value) }
    },
    template: `
        <label class="radio control" style="min-width: 5rem">
            <input type="radio" :name="name" :value="value" :checked="check" @change="update($event)" :disabled="disable">
            {{text}}
        </label>
    `
})
Vue.component("inputSelect", {
    props: { items: Array, value: String, options: Array },
    methods: {
        update(e) { this.$emit("input", e.target.value) },
        focus() { this.$refs.input.focus() }
    },
    computed: { selected: { get() { return this.value }, set() { } } },
    template: `
        <div class="select" style="width: 100%">
            <select style="width: 100%" v-model="selected" @change="update($event)" ref="input">
                <option disabled>Please select</option>
                <option v-for="(item, index) in items" :value="item.value">{{item.label}}</option>
            </select>
        </div>
    `
})
Vue.component("inputChecklist", {
    props: { items: Array, options: Object, selected: Array },
    data() { return { checkedvalues: this.selected, default_cols: 2, split_when_items_over: 4 } },
    computed: {
        columns() {
            cols = this.default_cols
            if (this.options !== undefined) {
                if (this.options.cols !== undefined) {
                    cols = this.options.cols
                }
            }
            return cols
        },
        total_items() { return this.items.length },
        item_break_point() {
            isOdd = !!(this.total_items % 2)
            break_point = Math.floor(this.total_items / 2)
            if (isOdd) { break_point += 1 }
            return break_point
        },
        items_first_half() { return this.items.slice(0, this.item_break_point) },
        items_second_half() { return this.items.slice(this.item_break_point, this.total_items) },
        items_list() {
            if (this.columns > 1 && this.total_items > this.split_when_items_over) { return this.items_first_half }
            else { return this.items }
        },
    },
    watch: {
        items(newVal) { this.checkedvalues = this.check_checked_items(newVal, this.checkedvalues) },
        selected(newVal) { this.checkedvalues = newVal },
    },
    methods: {
        update(e) {
            Checked = this.check_checked_items(this.items, this.checkedvalues)
            this.$emit("input", Checked)
        },
        check_checked_items(items, checks) {
            checked_items = []
            for (var j = 0; j < items.length; j++) {
                if (Formats.isInArray(items[j].value, checks)) { checked_items = checked_items.concat(items[j].value) }
            } return checked_items
        },
        style(index) {
            style = ""
            if (index % 2) { style += "background-color: #fafafa; " }
            else { style += "background-color: #ffffff; " }
            return style
        },
        focus() { this.$refs.input.focus() }
    },
    template: `
        <div class="panel control">
            <div class="columns is-desktop is-gapless " style="width: 100%;">
                <div class="column">
                    <label v-for="(item, index) in items_list" class="panel-block" :ref="item.value" :style="style(index)">
                        <input type="checkbox" @change="update($event)" v-model="checkedvalues" :value="item.value">
                        <span v-if="item.icon != null && item.icon != ''" class="panel-icon has-text-grey"><i :class="item.icon"></i></span>
                        {{item.label}}
                    </label>
                </div>
                <div v-if="columns > 1 && total_items > split_when_items_over" class="column">
                    <label v-for="(item, index) in items_second_half" class="panel-block" :ref="item.value" style="" :style="style(index)">
                        <input type="checkbox" @change="update($event)" v-model="checkedvalues" :value="item.value">
                        <span v-if="item.icon != null && item.icon != ''" class="panel-icon has-text-grey"><i :class="item.icon"></i></span>
                        {{item.label}}
                    </label>
                </div>
            </div>
        </div>
    `
})
Vue.component("inputCode", {
    props: ["value", "options"],
    methods: {
        update(e) {
            this.$refs.input.value = e.target.value
            this.$emit("input", e.target.value)
        }
    },
    template: `
        <input style="width: 100%;" :value="value" @focus="$event.target.select()" @click="$event.target.select()" @blur="update($event)" ref="input" type="textbox" class="input" autocomplete="off" placeholder="code">
    `
}),
Vue.component("inputText", {
    props: ["value", "placeholder"],
    methods: {
        update(e) {
            this.$refs.input.value = e.target.value
            this.$emit("input", e.target.value)
        }
    },
    template: `
        <input style="width: 100%;" :value="value" @focus="$event.target.select()" @click="$event.target.select()" @blur="update($event)" ref="input" type="textbox" class="input" autocomplete="off" :placeholder="placeholder">
    `
}),
Vue.component("inputTextarea", {
    props: ["value", "options"],
    methods: {
        update(e) {
            val = e.target.value
            this.$emit("input", val)
        },
        focus() { this.$refs.input.focus() }
    },
    computed: {
        text: { get() { return this.value }, set() { } }
    },
    template: `
        <textarea @input="update($event)" :value="value" ref="input" :rows="options.rows" class="textarea" style="width: inherit;" :class="options.class" autocomplete="off" :placeholder="options.placeholder"></textarea>
    `
})