$(document).ready(function() {
  $('#player1_won').hide();
  $('#player2_won').hide();
  $('form').hide();

  winner = false;
  function move_player(players_id) {
      if (!winner) {
        $(players_id).find(".active").removeClass('active').next().addClass('active');

        if ($('.active').hasClass('last')) {
          winner = true;
          id = "";
          if (players_id === "#player1_strip")
            id = "#player1_won";
          else
            id = "#player2_won";

          $(id).show();
          $('form').show();
          $('#return_home').val(id);
      }
    }
  }

  $(document).on("keyup", function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    if (charStr === "K")
      move_player("#player1_strip")

    else if (charStr === "S")
      move_player("#player2_strip")
  });
});
