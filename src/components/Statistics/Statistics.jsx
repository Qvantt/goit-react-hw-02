import React from "react";
import styles from "./Statistics.module.css";

const Statistics = ({ totalFeedback, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
