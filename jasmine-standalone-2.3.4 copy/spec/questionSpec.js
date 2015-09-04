



describe("Question Object Constructor", function(){
  var question;

  beforeEach(function() {
  question = new Question("dog");
  });

  it("creates a new question object with word", function(){
    expect(question.word).toBe("dog");
  });

  it("has userAnswer property default of 'null'", function(){
    expect(question.userAnswer).toBe(null);
  });

  it("has translatedWord property default of 'null'", function(){
    expect(question.translatedWord).toBe(null);
  });

  it("has isCorrect property default of 'null'", function(){
    expect(question.isCorrect).toBe(null);
  });


});