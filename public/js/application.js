$(document).ready(function() {

  function move_player(players_id) {
    // $('#player1_strip').removeClass('active').next().addClass('active');


    $(players_id).find(".active").removeClass('active').next().addClass('active');
  }

  document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    if (charStr === "k")
      move_player("#player1_strip")

    else if (charStr === "s")
      move_player("#player2_strip")

  };

});
