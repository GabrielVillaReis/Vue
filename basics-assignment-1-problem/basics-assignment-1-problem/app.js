Vue.createApp({
    data() {
        return {
            name: "",
            age: "",
            img: "https://static.wikia.nocookie.net/p__/images/c/c4/Vt7.jpg/revision/latest?cb=20150607221015&path-prefix=protagonist"
        }
    },
    computed: {
        agep5() {
            console.log("salve")
            if (this.age == "") {
                return ""
            }
            return this.age + 5
        }
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
        },
        setAge(event) {
            this.age = parseInt(event.target.value);
        }
    }
}).mount("#assignment");