//Start Game
//function startGame() {
//global variable document.turn
/*document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " gets to start.");
}*/
document.turn = "X";

//Notify Players whose turn it is
function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}
//Determines whether "X" or "O" fills the square
function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.winner + " already won the game.");
    } else if (square.innerHTML == "") {
        square.innerHTML = document.turn;
        switchTurn();
    } else {
        setMessage("That square is already taken!");
    }
}
//Switch turns after each turn
function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage("Congratulations, " + document.turn + "! You won!");
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");
    } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");
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
    $("#message").hide()

    $("#submit").click(function () {
        $("#message").show();
        var player1 = $("#player1").val();
        var player2 = $("#player2").val();

        var pickPlayer = [player1, player2];
        var random = pickPlayer[Math.floor(Math.random() * pickPlayer.length)];

        $("#message").text(random + " gets to start as X.");

    })
});
