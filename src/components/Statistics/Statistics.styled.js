import styled from 'styled-components';

export const StatisticsWrapper = styled.ul`
  margin-top: ${p => p.theme.space[3]}px;
`;

export const StatisticsItem = styled.li`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[4]}px;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const StatisticsText = styled.p``;
