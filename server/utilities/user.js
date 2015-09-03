// constructor
function User(){
  this.quizPassed= 0 ;
  this.quizCount= 0;
  this.quizFailed= 0;
  this.quizes= 0;
}
User.prototype.updateQuizCount = function(){
  console.log("test");
};

module.exports = User;
