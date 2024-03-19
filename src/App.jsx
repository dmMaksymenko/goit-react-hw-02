import "./App.module.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
function App() {
  const feedbackInit = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const buttons = ["good", "neutral", "bad"];
  return (
    <>
      <Description
        title="Sip Happens Cafe"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options buttons={buttons} />
      <Feedback feedback={feedbackInit} />
    </>
  );
}

export default App;
