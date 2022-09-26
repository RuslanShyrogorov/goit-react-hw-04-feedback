import styled from 'styled-components';

export const StatisticsWrapper = styled.ul``;

export const StatisticsItem = styled.li`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[4]};
  /* &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  } */
`;

export const StatisticsText = styled.p``;
