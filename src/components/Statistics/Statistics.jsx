import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsWrapper,
  StatisticsItem,
  StatisticsText,
} from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, persentage }) {
  return (
    <StatisticsWrapper>
      <StatisticsItem>
        <StatisticsText>Good: {good}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Neutral: {neutral}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Bad: {bad}</StatisticsText>
      </StatisticsItem>
      {total > 0 && (
        <StatisticsItem>
          <StatisticsText>Total: {total}</StatisticsText>
        </StatisticsItem>
      )}
      {good > 0 && (
        <StatisticsItem>
          <StatisticsText>Positive feedback: {persentage}%</StatisticsText>
        </StatisticsItem>
      )}
    </StatisticsWrapper>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  persentage: PropTypes.number.isRequired,
};
