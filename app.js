//Start Game
//function startGame() {
//global variable document.turn
//var turn = "X";
/*if (Math.random() < 0.5) {
    turn = "O";
}*/
var turn;
var winner = null;
var allMarkedSquares = [];
//document.winner = null;
//setMessage(document.turn + " gets to start.");
//document.turn = "X";

//Notify Players whose turn it is
function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}
//Determines whether "X" or "O" fills the square
function nextMove(square) {
    if (winner != null) {
        setMessage(winner + " already won the game.");
    } else if (winner == null && allMarkedSquares.length === 9) {
        setMessage("The game ended in a tie. Why don't you play again?")
    } else if (square.innerHTML == "") {
        square.innerHTML = turn;
        allMarkedSquares.push(turn);
        switchTurn();
    } else {
        setMessage("That square is already taken!");
    }
}
//Switch turns after each turn
function switchTurn() {
    if (checkForWinner(turn)) {
        setMessage("We have a winner...");
        winner = turn;
        var player1 = $("#player1").val();
        var player2 = $("#player2").val();
        if (turn == "X") {
            $("marquee").text(player1 + " is the winner!!!")
        } else if (turn == "O") {
            $("marquee").text(player2 + " is the winner!!!")
        }
    } else if (checkForTie()) {
        setMessage("It's a tie. :/");
        winner = null;
    } else if (turn == "X") {
        turn = "O";
        setMessage("It's " + turn + "'s turn!");
    } else {
        turn = "X";
        setMessage("It's " + turn + "'s turn!");
    }
}

function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(7, 5, 3, move) ||
        checkRow(1, 5, 9, move)) {
        result = true;
    }
    return result;
}

function checkForTie() {
    var result = false;
    if (allMarkedSquares.length === 9 && winner != turn) {
        result = true;
    }
    return result;
}


function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerHTML;
}

function restart() {
    document.location.reload();
}

$(document).ready(function () {
    $("#message").hide();
    $("table").hide();
    $("#reset").hide();

    $("#submit").click(function () {
        $("#message").show();
        $("table").show();
        $("#reset").show();
        var player1 = $("#player1").val();
        var player2 = $("#player2").val();

        var pickPlayer = [player1, player2];
        var random = pickPlayer[Math.floor(Math.random() * pickPlayer.length)];
        if (random == player1) {
            turn = "X";
        } else {
            turn = "O";
        }
        $("#message").text(random + " gets to start as " + turn);
        $("h3").hide();
        $("#top-container").hide();
    })
});
