Vue.createApp({
    data() {
        return {
            input1: "",
            user1: false,
            user2: false,
            visible: true,
            hidden: false,
            color: "#8ddba4"
        }
    },
    watch: {
        input1(value) {
            if (value == "user1") {
                this.user1 = true
            }
            else if (value == "user2") {
                this.user2 = true
            }
        }
    },

    methods: {
        setp() {
            this.hidden = this.visible
            this.visible = !this.hidden
        }
    },

}).mount("#assignment");