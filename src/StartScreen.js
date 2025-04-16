function StartScreen({ numOfQuestions }) {
  return (
    <div>
      <h2>Welcome to The React Quiz</h2>
      <p> {numOfQuestions} question to test your React mastery</p>
      <button>Let's start</button>
    </div>
  );
}

export default StartScreen;
