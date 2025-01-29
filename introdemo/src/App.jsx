import { useState } from 'react';

// Button component for handling feedback submission
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// StatisticLine component for displaying a single statistic in a table row
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

// Statistics component to render all the statistics using StatisticLine in a table
const Statistics = ({ good, neutral, bad }) => {
  // Calculate total feedback
  const totalFeedback = good + neutral + bad;

  // Calculate average score (good: 1, neutral: 0, bad: -1)
  const averageScore = totalFeedback ? (good - bad) / totalFeedback : 0;

  // Calculate percentage of positive feedback
  const positivePercentage = totalFeedback ? (good / totalFeedback) * 100 : 0;

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total feedback" value={totalFeedback} />
          <StatisticLine text="Average score" value={averageScore.toFixed(2)} />
          <StatisticLine text="Positive feedback" value={positivePercentage.toFixed(2) + '%'} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Handle feedback submission for each type
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  // Check if any feedback has been submitted
  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={handleGoodClick} />
      <Button text="Neutral" handleClick={handleNeutralClick} />
      <Button text="Bad" handleClick={handleBadClick} />

      {totalFeedback > 0 && (
        <div>
          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      )}
    </div>
  );
};

export default App;


