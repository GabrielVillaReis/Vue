function attackDMG(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function initialState() {
    return {
        monsterHealth: 100,
        playerHealth: 100,
        rounds: 0,
        lastspecial: 0,
        healTimes: 0,
        gameState: 0,
        logMessages: [],
        test: {
            test1: 0,
            test2: "",
        },
    }
}

Vue.createApp({
    data() {
        return initialState()
    },
    watch: {
        rounds() {
            if (this.playerHealth > 100) { this.playerHealth = 100 }
            if (this.playerHealth < 0) { this.playerHealth = 0 }
            if (this.monsterHealth > 100) { this.monsterHealth = 100 }
            if (this.monsterHealth < 0) { this.monsterHealth = 0 }
            if (this.monsterHealth === 0 && this.playerHealth === 0) { this.gameState = "It's a Draw" }
            else if (this.playerHealth === 0) { this.gameState = " You Loose :(" }
            else if (this.monsterHealth === 0) { this.gameState = "You Win!" }
        },
    },

    computed: {
        specialRound() {
            if (this.rounds == 0) { return true }
            if (this.rounds >= this.lastspecial + 4) { return false }
            else { return true }
        },
        healAvailable() {
            if (this.playerHealth === 100 || this.healTimes === 2) { return true }
            return false;
        }
    },
    methods: {
        attackMonster() {
            const damage = attackDMG(5, 12);
            this.monsterHealth -= damage
            this.addLogMessage("Player", "attacks", ": " + damage)
            this.attackPlayer();
            this.rounds++;
            this.test.test1++;
        },
        attackPlayer() {
            const damage = attackDMG(6, 15);
            this.playerHealth -= damage
            this.addLogMessage("Monster", "attacks", ": " + damage)
        },
        specialAttackMonster() {
            const damage = attackDMG(10, 20);
            this.monsterHealth -= damage
            this.addLogMessage("Player", "attacks", ": " + damage)
            this.attackPlayer();
            this.lastspecial = this.rounds
            this.rounds++;
        },
        healPlayer() {
            const heal = attackDMG(6, 15);
            this.playerHealth += heal
            this.addLogMessage("Player", "heals", ": " + heal)
            this.healTimes++;
            this.rounds++;
            this.test.test2 = "salve";
        },
        surrender() {
            this.playerHealth = 0
            this.addLogMessage("Player", "has surrended", "")
            this.rounds++;
        },
        restartGame() {
            Object.assign(this.$data, initialState());
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
}).mount("#game");