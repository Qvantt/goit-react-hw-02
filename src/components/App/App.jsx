import React, { useState, useEffect } from "react";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Statistics from "../Statistics/Statistics";
import styles from "./App.module.css";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <div className={styles.container}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback feedback={feedback} />
          <Statistics
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </>
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;
