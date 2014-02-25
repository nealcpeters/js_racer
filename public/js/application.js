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

function move_player(player_id, winner) {
  if (!winner) {
    $(player_id).find(".active").removeClass('active').next().addClass('active');

    if ($('.active').hasClass('last')) {
      winner = true;
      id = "";
      if (player_id === "#player1_strip")
        id = "#player1_won";
      else
        id = "#player2_won";

      $(id).show();
      $('form').show();
      $('#return_home').val(id);
    }
  }
}



function movement() {
  $(document).on("keyup", function(evt) {
      evt = evt || window.event;
      var charCode = evt.keyCode || evt.which;
      var charStr = String.fromCharCode(charCode);
      if (charStr === "K")
        move_player("#player1_strip", winner)
      else if (charStr === "S")
        move_player("#player2_strip", winner)
    });
};


$(document).ready(function() {
  initializeBoard();

  winner = false;

  movement();


});
