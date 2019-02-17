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

TennisGame2.prototype.areEqualScore= function(pointsPlayer1,pointsPlayer2){
    if(pointsPlayer1 === pointsPlayer2)
        return true;
    else
        return false;
}

TennisGame2.prototype.getPointName= function(playerPoint){
    if(playerPoint === 0)
        return "Love";
    else if (playerPoint === 1)
        return "Fifteen";
    else if(playerPoint === 2)
        return "Thirty";
    else if (playerPoint >= 3)
        return "Forty";
}

TennisGame2.prototype.isDeuce= function(pointsPlayer){
    if(pointsPlayer >= 3)
        return true;
    else
        return false;
}

TennisGame2.prototype.isLessThanFour= function(pointsPlayer){
    if(pointsPlayer <4 )
        return true;
    else
        return false;
}
TennisGame2.prototype.diferenceBetween= function(pointsPlayer1,pointsPlayer2){
    return pointsPlayer1 - pointsPlayer2;
}

TennisGame2.prototype.isAnAdvantageScoring= function(){
    if(this.diferenceBetween(this.pointsPlayer1,this.pointsPlayer2) === 1 || this.diferenceBetween(this.pointsPlayer2,this.pointsPlayer1) === 1)
        return true;
    else   
        return false;
}

TennisGame2.prototype.advantageScoringFor= function(){
    if(this.diferenceBetween(this.pointsPlayer1,this.pointsPlayer2) === 1)
        return "player1";
    else   
        return "player2";
}

TennisGame2.prototype.winSetFor= function(){
    if(this.diferenceBetween(this.pointsPlayer1,this.pointsPlayer2) >= 2)
        return "player1";
    else   
        return "player2";
}

TennisGame2.prototype.gameScoreboard = function() {
    var score = "";
    if(this.areEqualScore(this.pointsPlayer1,this.pointsPlayer2))
    {
        if(this.isDeuce(this.pointsPlayer1))
            score = "Deuce";
        else
            score = this.getPointName(this.pointsPlayer1) + "-All";
    }
    else if(this.isLessThanFour(this.pointsPlayer1) && this.isLessThanFour(this.pointsPlayer2))
        score = this.getPointName(this.pointsPlayer1) + "-" + this.getPointName(this.pointsPlayer2)  
    else if (this.isAnAdvantageScoring())
        score = "Advantage " + this.advantageScoringFor();
    else 
        score = "Win for " + this.winSetFor();
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
