// constructor
function User(name){
  this.name = name;
  this.quizesPassed = 0;
  // this.quizCount = 0;
  this.quizesFailed = 0;
  this.quizes = [];
}


User.prototype.addQuiz = function(quiz){
  this.quizes.push(quiz);
};



module.exports = User;
