function Game(){
  this.easy = 'tuba singer race candy student day jump hurt laundry blue sad old guitar athlete night knee wedding bat buy trash can freckle stream quiet mop swing radio square Monday school bus poem scared draw type short stairs asleep motorcycle lunch fog new straw push dirty girl helicopter playground tiger tornado lime leg salt ankle cake shoelace wheelchair goodbye worm eyebrow lion pear talk glasses shirt spoon box wind green wolf snow couch fix flashlight princess broken dictionary plate neighbor roller coaster bridge mailbox flower white sandcastle triangle thunder monster long lizard cafeteria music fire engine star cook tired slow outer space brave horse niece elephant tractor elevator light bulb broccoli cough heart calculator stick cat tree house watermelon chocolate bird nest fast hungry red frown chew pepper sick';
  this.medium = "taxi cab standing ovation alarm clock tool banana peel flagpole money wallet ballpoint pen sunburn wedding ring spy baby-sitter aunt acne bib puzzle piece pawn astronaut tennis shoes blue jeans twig outer space banister batteries doghouse campsite plumber bedbug throne tiptoe log mute pogo stick stoplight ceiling fan bedspread bite stove windmill nightmare stripe spring wristwatch eat matchstick gumball bobsled bonnet flock sprinkler living room laugh snuggle sneeze bud elf headache slam dunk Internet saddle ironing board bathroom scale kiss shopping cart shipwreck funny glide lamp candlestick grandfather rocket home movies seesaw rollerblades smog grill goblin coach claw cloud shelf recycle glue stick Christmas carolers front porch earache robot foil rib robe crumb paperback hurdle rattle fetch date iPod dance cello flute dock prize dollar puppet brass firefighter huddle easel pigpen bunk bed bowtie fiddle dentist baseboards letter opener photographer magic Old Spice monster";
  this.hard = 'whatever sip coop blur chime bleach clay blossom cog twitterpated wish through feudalism whiplash cot blueprint beanstalk think cardboard darts inn Zen sheriff tiptop dot bob hose blimp tuxedo reimbursement capitalism step-daughter applause jig jade blunt application rag squint intern brainstorm sling half pinch leak skating rink jog jamming shrink ray dent scoundrel escalator charger sequins flu scuff mast sash modern ginger clockwork mess mascot runt chain tissue suntan pomp scramble sentence cuff spool forever freight train diver fringe humidifier handwriting dawn dimple hedge plank race publisher fizz gem ditch wool plaid fancy ebony ivory feast billboard flush inconceivable tide midsummer population elm organ flannel hatch booth';
  this.user = null;
}

Game.prototype.prepareWordArray = function (string) {
  var array = string.split(' ');
  return array;
};

Game.prototype.init = function () {
  var name = $('#name-input').val;
  this.user = new User(name);
};

Game.prototype.renderQuestion = function (word) {
  $('#question-word').html(word);
};

Game.prototype.renderResults= function(results){
    $('#questions-answered').html(results.questionsAnswered);
    $('#questions-correct').html(results.questionsCorrect);
    $('#questions-incorrect').html(results.questionsIncorrect);
    $('#questions-remaining').html(results.questionsRemaining);
};

Game.prototype.renderFail = function () {
    $('#start-screen').show();
    $('#message').html("Sorry, you f'ed up!");
};

//// event handlers ////

$('#login').on('click',function(){
  game = new Game();
  game.init();
});

$('#start-quiz').on('click',function(){

});

$('#submit-answer').on('click',function(){

});

$('#next-question').on('click',function(){

});

$('#restart-quiz').on('click',function(){

});

$('#change-user').on('click',function(){

});


// Need to add user stats rendering.
// we have practice
// add quiz language wordArray
