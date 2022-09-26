import React from 'react';
import PropTypes from 'prop-types';

import { ButtonsWrapper, FeedbackItem, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonsWrapper>
      {options.map((option, index) => (
        <FeedbackItem key={index}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </FeedbackItem>
      ))}
    </ButtonsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
