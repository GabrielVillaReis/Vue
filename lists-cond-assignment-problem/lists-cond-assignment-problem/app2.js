Vue.createApp({
    data() {
        return {
            input1: "",
            taskList: [],
            display: true
        }
    },
    computed: {
        buttonText() {
            return this.display ? "Hide List" : "Show List"
        }
    },
    methods: {
        addTask() {
            this.taskList.push(this.input1);
        },
        toggleTaskList() {
            this.display = !this.display;
        }
    },

}).mount("#assignment");