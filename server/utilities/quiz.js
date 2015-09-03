// constructor
function Quiz(){
  this.correctWords = 0 ;
  this.totalQuestionsAnswered= 0;
  this.incorrectWordsArray= 0;
  this.languageChoice= 0;
  this.words= 0;
  this.questions= 0;
  this.currentQuestion= 0;
  this.isFailed= 0;
}
//
Quiz.prototype.updateResults= function(){
  console.log("test");
};
Quiz.prototype.renderResults= function(){
  console.log("test");
};
Quiz.prototype.renderQuestion= function(){
  console.log("test");
};
Quiz.prototype.setLanguageChoice= function(){
  console.log("test");
};
Quiz.prototype.nextQuestion= function(){
  console.log("test");
};
Quiz.prototype.checkFailQuiz= function(){
  console.log("test");
};

module.exports = Quiz;
