function Player(strip, name){
  this.strip = strip;
  this.name = name;

  this.position = 0;

  this.move = function(){
    this.position += 1
  }

  this.update_position = function(){
    $(this.strip + " .active").removeClass("active");
    this.move();
    $($(this.strip).children()[this.position]).addClass('active');
  }

  this.reset = function() {
    $(this.strip + " .active").removeClass("active");
    $($(this.strip).children()[0]).addClass('active');
  }

}
