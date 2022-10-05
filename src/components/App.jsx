import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App2() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const changeFeedback = event => {
    const value = event.currentTarget.textContent;

    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const buttons = Object.keys(options);
  const totalFeedback = countTotalFeedback();
  return (
    <div>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={buttons}
          onLeaveFeedback={changeFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            persentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification text="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
