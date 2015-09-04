describe("Question Object Constructor", function(){
  var user;

  beforeEach(function() {
  user = new User("George");
  });

  it("creates a new user object with name", function(){
    expect(user.name).toBe("George");
  });

  it("has userAnswer property default of 'null'", function(){
    expect(user.quizesPassed).toBe(0);
  });

  it("has translatedWord property default of 'null'", function(){
    expect(user.quizesFailed).toBe(0);
  });

  it("has isCorrect property default of 'null'", function(){
    expect(user.quizes).toEqual([]);
  });
});