// constructor
function Question(word){
  this.userAnswer = null;
  this.word = word;
  this.translatedWord = 0;
  this.isCorrect = 0;
  this.
}
//
Question.prototype.setUserAnswer = function(){
  this.userAnswer = $("#user-answer").val();
};

Question.prototype.renderWord = function(){
  $("#question-word").html(this.word);
};
Question.prototype.getTranslation = function(word){
  console.log("test");
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
  };
  if (count > 1){
    return false;
  }
  else return true;
};

module.exports = Question;
