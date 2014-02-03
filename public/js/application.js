//p = 80, q= 81

$(document).ready(function() {
  player1 = new Player("#player1_strip", "Player 1");
  player2 = new Player("#player2_strip", "Player 2");
  var start_time = null;
  var end_time = null;
  start_game();

  $(document).on('keyup', function(event) {

    if (event.keyCode == 80) {
      player1.update_position();

    }

    else if (event.keyCode == 81) {
      player2.update_position();
    }

    check_game_over(player1,player2);
  });

});

function start_game() {
  alert("Click OK to start the game.");
  start_time = new Date().getTime();
}

function Player(row_id, name) {
  this.reset = function() {
    $(this.row_id).children().removeClass("active");
    this.position = $(this.row_id).children()[0];
    $(this.position).addClass("active");
  }

  this.row_id = row_id
  this.position = null;
  this.reset();
  this.name = name;



  this.update_position = function() {
    $(this.position).removeClass("active").next().addClass("active");
    this.position = $(this.position).next();
    if (this.position.length === 0){
      end_time = new Date().getTime();
      $.post("/game", {time: end_time - start_time, win: this.name}, display_results_link);
      alert(this.name + " won");
    }
  }

}

function display_results_link(result_id) {
  $("a#results").attr("href", "/results/" + result_id).show();
}

var check_game_over = function(player1, player2) {
    if (player1.position.length === 0 || player2.position.length === 0) {
      player1.reset();
      player2.reset();
    }
}
