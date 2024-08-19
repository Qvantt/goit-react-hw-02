import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div className={styles.feedback}>
      <h2>Feedback Summary</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
