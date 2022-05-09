Vue.createApp({
    data() {
        return {
            input1: "",
            taskList: [],
            display: "visible",
            button1: "Hide"
        }
    },
    methods: {
        addTask() {
            this.taskList.push(this.input1)
        },
        setp() {
            if (this.display == "visible") {
                this.display = "hidden"
                this.button1 = "Show"
            }
            else {
                this.display = "visible"
                this.button1 = "Hide"
            }
        }
    }

}).mount("#assignment");