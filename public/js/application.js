// var player1 = {
//   name: "player1"
// };


// player1.winner = ture
// var player2 = {
//   name: "player2"
// };

// var gameStart = {
//   time: new Date().getTime()
// };

// var gameEnd = {
//   time: new Date().getTime()
// };

function initializeBoard() {
  $('#player1_won').hide();
  $('#player2_won').hide();
  $('form').hide();
};

function determineWinner(player_id) {
    id = "";
      if (player_id === "#player1_strip")
        id = "#player1_won";
      else
        id = "#player2_won";
      showForm(id);
}

function move_player(player_id, winner) {
  if (!winner) {
    $(player_id).find(".active").removeClass('active').next().addClass('active');

    if ($('.active').hasClass('last')) {
      winner = true;
      determineWinner(player_id);
    }
  }
}

function movement() {
  $(document).on("keyup", function(evt) {
      evt = evt || window.event;
      var charCode = evt.keyCode || evt.which;
      var charStr = String.fromCharCode(charCode);
      if (charStr === "K")
        "#player1_strip"
      else if (charStr === "S")
        "#player2_strip"
    });
};

function showForm(id) {
  $(id).show();
  $('form').show();
  $('#return_home').val(id);
}


$(document).ready(function() {
  initializeBoard();

  winner = false;

  movement();
  move_player(player_id, winner)

});
