/*Vue.createApp({
    data() {
        return {
            input1: "",
            display: "visible",
            color: "#8ddba4"
        }
    },
    methods: {
        setp() {
            if (this.display == "visible") {
                this.display = "hidden"
            }
            else { this.display = "visible" }
        }
    },

}).mount("#assignment"); */


Vue.createApp({
    data() {
        return {
            input1: "",
            display: "visible",
            color: ""
        }
    },

    computed: {
        pclass() {
            return [
                input1,
                display
            ]
        }
    },
    methods: {
        setp() {
            if (this.display == "visible") {
                this.display = "hidden"
            }
            else { this.display = "visible" }
        }
    },

}).mount("#assignment");