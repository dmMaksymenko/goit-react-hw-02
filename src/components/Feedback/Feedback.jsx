const Feedback = ({ feedbackState, totalFeedback, positiveFeedback }) => {
  const feedbackStatus = Object.keys(feedbackState);
  return (
    <div>
      {feedbackStatus.map((key) => {
        const feedbackValues = feedbackState;
        return (
          <p key={key}>
            {key}: {feedbackValues[key]}
          </p>
        );
      })}
      {totalFeedback > 0 && <p>Total: {totalFeedback}</p>}
      {positiveFeedback > 0 && <p>Positive: {positiveFeedback}%</p>}
    </div>
  );
};

export default Feedback;
