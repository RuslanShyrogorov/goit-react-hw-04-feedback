import React, { Component } from 'react';

import {
  ButtonsWrapper,
  Button,
  FeedbackWrapper,
  FeedbackText,
  Title,
} from './Feedback.styled';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = feedbackName => {
    this.setState(prevState => {
      const value = prevState[feedbackName];
      return {
        [feedbackName]: value + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivPersentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePersentage = this.countPositivPersentage();
    return (
      <div>
        <Title>Please leave feedback</Title>
        <ButtonsWrapper>
          <Button type="button" onClick={() => this.changeFeedback('good')}>
            Good
          </Button>
          <Button type="button" onClick={() => this.changeFeedback('neutral')}>
            Neutral
          </Button>
          <Button type="button" onClick={() => this.changeFeedback('bad')}>
            Bad
          </Button>
        </ButtonsWrapper>
        <Title>Statistics</Title>
        <FeedbackWrapper>
          <FeedbackText>Good: {good}</FeedbackText>
          <FeedbackText>Neutral: {neutral}</FeedbackText>
          <FeedbackText>Bad: {bad}</FeedbackText>
          {(good > 0 || neutral > 0 || bad > 0) && (
            <FeedbackText>Total: {totalFeedback}</FeedbackText>
          )}
          {(good > 0 || neutral > 0 || bad > 0) && (
            <FeedbackText>
              Positive persentage: {Math.round(positivePersentage)}%
            </FeedbackText>
          )}
        </FeedbackWrapper>
      </div>
    );
  }
}
