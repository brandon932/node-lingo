// add scripts

$(document).on('ready', function() {
  game = new Game();
  game.init();

    // make the age verification window stay up until it is completed
  $('#ageModal').modal({
    backdrop:'static',
    keyboard:false,
    show:true
  });

});
