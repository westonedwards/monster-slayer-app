new Vue({
    el: '#app',
    data: {
        gameInProgress: false,
        yourHealth: 100,
        monsterHealth: 100,
        healthLog: []
    },
    methods: {
        generateRandomNumber: function(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        },
        attack: function(low = 1, max = 10) {
            let minNumber = low;
            let maxNumber = max;
            let yourAttackAmount = this.generateRandomNumber(minNumber, maxNumber);
            let monsterAttackAmount = this.generateRandomNumber(minNumber, maxNumber);
            this.healthLog.push({ attack: yourAttackAmount, attacks: monsterAttackAmount });
            this.yourHealth -= monsterAttackAmount;
            this.monsterHealth -= yourAttackAmount;
            this.checkForWinner();
        },
        specialAttack: function() {
            this.attack(10,20);
        },
        heal: function() {
            let minNumber = 1;
            let maxNumber = 10;
            let healAmount = this.generateRandomNumber(minNumber, maxNumber);
            let monsterAttackAmount = this.generateRandomNumber(minNumber, maxNumber);
            this.healthLog.push({ heal: healAmount, attacks: monsterAttackAmount});
            this.yourHealth += healAmount;
            this.yourHealth -= monsterAttackAmount;
            this.checkForWinner();
        },
        resetGame: function() {
            this.gameInProgress = false;
            this.yourHealth = 100;
            this.monsterHealth = 100;
            this.healthLog = [];
        },
        checkForWinner: function() {
            if(this.yourHealth <= 0) {
                alert('Monster wins!');
                this.resetGame();
            }
            else if(this.monsterHealth <= 0) {
                alert('You win!');
                this.resetGame();
            }
        }
    }
});