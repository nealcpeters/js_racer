var Game = function() {
  var winner = false;
  this.player1_board = $('#player1_strip td');
  this.player2_board = $('#player2_strip td');

  this.initializeBoard = function() {
    $('#player1_won').hide();
    $('#player2_won').hide();
    $('form').hide();
  }

  this.play = function() {
    var game = this;
    $(document).on("keyup", function(evt) {
      evt = evt || window.event;
      var charCode = evt.keyCode || evt.which;
      var charStr = String.fromCharCode(charCode);
      if (charStr === "K")
        move_player(game.player1_board)
      else if (charStr === "S")
        move_player(game.player2_board)
    });
  }

  function move_player(player_board) {
    if (!winner) {
      $(player_board).closest('.active').removeClass('active').next().addClass('active');

      if ($('.active').hasClass('last')) {
        winner = true;
        determineWinner(player_board);
      }
    }
  }
  var self = this;
  function determineWinner(player_id) {
    if (player_id === self.player1_board)
      var id = "#player1_won";
    else if (player_id === self.player2_board)
      var id = "#player2_won";
    showForm(id);
    console.log();
  }

}; //END OF CLASS


function showForm(id) {
  $(id).show();
  $('form').show();
  $('#return_home').val(id);
}

$(document).ready(function() {
  var game = new Game();
  game.initializeBoard();
  game.play();
});
