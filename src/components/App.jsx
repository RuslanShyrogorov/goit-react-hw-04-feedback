import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = event => {
    // console.log(event.currentTarget.textContent);
    const value = event.currentTarget.textContent;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const buttons = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
    return (
      <div>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={buttons}
            onLeaveFeedback={this.changeFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              persentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
