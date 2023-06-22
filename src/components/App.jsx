import { useState } from 'react';
import { Section } from './section/section.jsx';
import { Feedback } from './feedback/feedback.jsx';
import { Notification } from './notification/notification.jsx';
import { Statistics } from './statistics/statistics.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();

  const positivePercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback" />
      <Feedback
        onLeaveFeedback={onLeaveFeedback}
        options={['good', 'neutral', 'bad']}
      />

      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
