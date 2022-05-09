Vue.createApp({
    data() {
        return {
            resultnum: 0,
            result: ""
        }
    },
    watch: {
        resultnum(value) {
            if (value == 37) {
                this.result = value
            }
            else if (value > 37) {
                this.result = "Muito"
            }
            else {
                this.result = "Ainda falta"
            }
        },
        result(value) {
            if (value == 37) {
                const that = this;
                setTimeout(function () {
                    that.resultnum = 0
                }, 5000);
            }
        }
    },
    methods: {
        add(num) {
            this.resultnum = this.resultnum + num
        }
    },
}).mount("#assignment");