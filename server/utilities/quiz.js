// constructor
function Quiz(language, type, wordArray){
  this.languageChoice = language;
  // this.type =
  this.words = wordArray;
  this.questions = [];
  this.currentQuestion= 0;
  this.isFailed = false;
  this.isPassed = false;
  this.results = new Results(0, 0, 0, 20);
}

Quiz.prototype.getWord = function(){
  var index = Math.floor(Math.random * this.words.length);
  return this.words.splice(index, 1);
};

Quiz.prototype.createQuestions = function () {
  for (var i = 0; i < 20; i++) {
    this.questions.push(
      new Question(this.getWord())
    );
  }
};

// update results as quiz progresses
Quiz.prototype.updateResults= function(){
  // this takes care of qeustions answered and questions remaining
  for (var i = 0; i < this.questions.length; i++) {
    if (this.questions[i].userAnswer !== null ) {
      this.results.questionsAnswered ++;
      this.results.questionsRemaining --;
    }
    if (this.questions[i].isCorrect) {
      this.questionsCorrect ++;
    }
  }
    this.questionsIncorrect = this.questionsAnswered - this.questionsCorrect;
};



Quiz.prototype.nextQuestion= function(){
  this.updateResults();
  this.checkFailQuiz();
  this.currentQuestion ++;
  this.renderQuestion();
};

// if they miss 5 questions,
Quiz.prototype.checkFailQuiz= function(){
  if (this.results.questionsIncorrect >= 5) {
    this.renderFail();
    this.isFailed = true;
  }
};

Quiz.prototype.checkPassQuiz = function () {
  if (this.results.questionsCorrect > 15 && this.results.questionsRemaining === 0){
    this.isPassed = true;
  }
};

// give them the choice to start quiz again or go to practice.
Quiz.prototype.renderFail = function () {
    $('#start-screen').show();
    $('#message').html("Sorry, you f'ed up!");
};

Quiz.prototype.renderResults= function(){
    $('#questions-answered').html(this.results.questionsAnswered);
    $('#questions-correct').html(this.results.questionsCorrect);
    $('#questions-incorrect').html(this.results.questionsIncorrect);
    $('#questions-remaining').html(this.results.questionsRemaining);
};

Quiz.prototype.renderQuestion= function(){
    $('#question-word').html(this.questions[this.currentQuestion].word);
};

// constructor for results
function Results(qA, qC, qI, qR){
  this.questionsAnswered = qA;
  this.questionsCorrect = qC;
  this.questionsIncorrect = qI;
  this.questionsRemaining = qR;
}

module.exports = Quiz;
