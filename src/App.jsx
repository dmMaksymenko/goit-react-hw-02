import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
function App() {
  const feedbackInitial = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackState, setFeedbackState] = useState(() => {
    const stringifiedFeedback = window.localStorage.getItem("feedback-locale");
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? feedbackInitial;
    return parsedFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "feedback-locale",
      JSON.stringify(feedbackState)
    );
  }, [feedbackState]);

  const updateFeedback = (type) => {
    if (type === "reset") {
      setFeedbackState(feedbackInitial);
    } else {
      setFeedbackState({ ...feedbackState, [type]: feedbackState[type] + 1 });
    }
  };
  const buttons = ["good", "neutral", "bad"];
  const totalFeedback =
    feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const positiveFeedback = Math.round(
    (feedbackState.good / totalFeedback) * 100
  );

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the
        options below."
      />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        buttons={buttons}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackState={feedbackState}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification text="Not feedback yet" />
      )}
    </>
  );
}

export default App;
