function Game(){
  this.player1 = new Player("#player1_strip", "Player 1");
  this.player2 = new Player("#player2_strip", "Player 2");
  var start_time = start_game();

  function start_game() {
    alert("Click OK to start the game.");
    return $.now();
  }

  this.winner = function(){
    if (this.player1.position >=14){
      return this.player1.name;
    }
    else if (this.player2.position >=14){
      return this.player2.name;
    }
    else {
     return false;
    }
  }

  this.end_game = function() {
    if (this.winner()){
      this.player1.reset();
      this.player2.reset();

      $.post("/game", {time: $.now() - start_time, win: this.winner()}, display_results_link);
      alert(this.winner() + " won");
    }
  }
}
