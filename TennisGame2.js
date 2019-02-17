var TennisGame2 = function(namePlayer1, namePlayer2) {
    this.initializePlayersScore();
    this.initializePlayersResults();
    this.setPlayersNames(namePlayer1,namePlayer2);
};

TennisGame2.prototype.setPlayersNames = function(namePlayer1, namePlayer2){
    this.namePlayer1=  namePlayer1;
    this.namePlayer2= namePlayer1;
}

TennisGame2.prototype.initializePlayersScore = function(){
    this.pointsPlayer1 = 0;
    this.pointsPlayer2 = 0;
}

TennisGame2.prototype.initializePlayersResults = function(){
    this.resultPlayer1 = "";
    this.resultPlayer2 = "";
}

TennisGame2.prototype.getScore = function() {
    var score = "";

    if (this.pointsPlayer1 === this.pointsPlayer2 && this.pointsPlayer1 < 3) {
        if (this.pointsPlayer1 === 0)
            score = "Love";
        if (this.pointsPlayer1 === 1)
            score = "Fifteen";
        if (this.pointsPlayer1 === 2)
            score = "Thirty";
        score += "-All";
    }
    if (this.pointsPlayer1 === this.pointsPlayer2 && this.pointsPlayer1 > 2)
        score = "Deuce";

    if (this.pointsPlayer1 > 0 && this.pointsPlayer2 === 0) {
        if (this.pointsPlayer1 === 1)
            this.resultPlayer1 = "Fifteen";
        if (this.pointsPlayer1 === 2)
            this.resultPlayer1 = "Thirty";
        if (this.pointsPlayer1 === 3)
            this.resultPlayer1 = "Forty";

        this.resultPlayer2 = "Love";
        score = this.resultPlayer1 + "-" + this.resultPlayer2;
    }
    if (this.pointsPlayer2 > 0 && this.pointsPlayer1 === 0) {
        if (this.pointsPlayer2 === 1)
            this.resultPlayer2 = "Fifteen";
        if (this.pointsPlayer2 === 2)
            this.resultPlayer2 = "Thirty";
        if (this.pointsPlayer2 === 3)
            this.resultPlayer2 = "Forty";

        this.resultPlayer1 = "Love";
        score = this.resultPlayer1 + "-" + this.resultPlayer2;
    }

    if (this.pointsPlayer1 > this.pointsPlayer2 && this.pointsPlayer1 < 4) {
        if (this.pointsPlayer1 === 2)
            this.resultPlayer1 = "Thirty";
        if (this.pointsPlayer1 === 3)
            this.resultPlayer1 = "Forty";
        if (this.pointsPlayer2 === 1)
            this.resultPlayer2 = "Fifteen";
        if (this.pointsPlayer2 === 2)
            this.resultPlayer2 = "Thirty";
        score = this.resultPlayer1 + "-" + this.resultPlayer2;
    }
    if (this.pointsPlayer2 > this.pointsPlayer1 && this.pointsPlayer2 < 4) {
        if (this.pointsPlayer2 === 2)
            this.resultPlayer2 = "Thirty";
        if (this.pointsPlayer2 === 3)
            this.resultPlayer2 = "Forty";
        if (this.pointsPlayer1 === 1)
            this.resultPlayer1 = "Fifteen";
        if (this.pointsPlayer1 === 2)
            this.resultPlayer1 = "Thirty";
        score = this.resultPlayer1 + "-" + this.resultPlayer2;
    }

    if (this.pointsPlayer1 > this.pointsPlayer2 && this.pointsPlayer2 >= 3) {
        score = "Advantage player1";
    }

    if (this.pointsPlayer2 > this.pointsPlayer1 && this.pointsPlayer1 >= 3) {
        score = "Advantage player2";
    }

    if (this.pointsPlayer1 >= 4 && this.pointsPlayer2 >= 0 && (this.pointsPlayer1 - this.pointsPlayer2) >= 2) {
        score = "Win for player1";
    }
    if (this.pointsPlayer2 >= 4 && this.pointsPlayer1 >= 0 && (this.pointsPlayer2 - this.pointsPlayer1) >= 2) {
        score = "Win for player2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.pointsPlayer1++;
};

TennisGame2.prototype.P2Score = function() {
    this.pointsPlayer2++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}