import React from "react";
import css from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  const feedbackStatus = Object.keys(feedback);

  return (
    <div>
      {feedbackStatus.map((item) => {
        const feedbackValues = feedback;

        return (
          <p key={item}>
            {item}: {feedbackValues[item]}
          </p>
        );
      })}
    </div>
  );
};

export default Feedback;
