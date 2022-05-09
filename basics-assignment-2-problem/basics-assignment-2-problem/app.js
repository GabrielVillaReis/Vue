Vue.createApp({
    data() {
        return {
            output: "",
            output2: ""
        };
    },
    methods: {
        salert() {
            alert("oi");
        },
        poutput(event) {
            this.output = event.target.value;
        },
        poutput2(event) {
            this.output2 = event.target.value;
        }
    }

}).mount("#assignment");