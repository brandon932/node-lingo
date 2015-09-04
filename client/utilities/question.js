var key1 = require('../../keys');
require('dotenv').load();
var bt = require('bing-translate').init({
  client_id: 'Linquiztics',
  client_secret: process.env.LANGUAGE_KEY
});

// constructor
function Question(word){
  this.userAnswer = null;
  this.word = word;
  this.translatedWord = null;
  this.isCorrect = null;
}
//
Question.prototype.setUserAnswer = function(){
  this.userAnswer = $("#user-answer").val();
};

Question.prototype.renderWord = function(){
  $("#question-word").html(this.word);
};
Question.prototype.getTranslation = function(word, langFrom,langTo ){

  bt.translate(word,langFrom,langTo, function(err, res){
    console.log(err, res);
    return res;
  });
};
Question.prototype.checkUserAnswer = function(){
  if (this.userAnswer === this.translatedWord){
    this.isCorrect = true;
  }
  else if (this.userAnswer.length === this.translatedWord.length){
    this.isCorrect = false;
  }
  else if (this.isAcceptable()){
    this.isCorrect = true;
  }
  else {
    this.isCorrect = false;
  }
};

Question.prototype.isAcceptable = function(){
  var count = 0;
  for (var i = 0; i < this.userAnswer.length; i++) {
    if (this.translatedWord.word[i] !== this.userAnswer[i]){
      count++;
    }
  }
  if (count > 1){
    return false;
  }
  else return true;
};

module.exports = Question;
