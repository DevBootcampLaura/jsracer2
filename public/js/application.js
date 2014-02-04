//p = 80, q= 81

$(document).ready(function() {

  game = new Game();


   $(document).on('keyup', function(event) {

    if (event.keyCode == 80) {
      game.player1.update_position();

    }

    else if (event.keyCode == 81) {
      game.player2.update_position();
    }

    game.end_game();

  });

});



function display_results_link(result_id) {
  $("a#results").attr("href", "/results/" + result_id);
  $("#game_over").show();
}

