// constructor
function Question(){
  this.userAnswer =0 ;
  this.word = 0;
  this.translatedWord = 0;
  this.isCorrect = 0;
}
//
Question.prototype.setUserAnswer = function(){
  console.log("test");
};
Question.prototype.getWord = function(){
  console.log("test");
};
Question.prototype.renderWord = function(){
  console.log("test");
};
Question.prototype.getTranslation = function(){
  console.log("test");
};
Question.prototype.checkUserAnswer = function(){
  console.log("test");
};
Question.prototype.isAcceptable = function(){
  console.log("test");
};

module.exports = Question;
