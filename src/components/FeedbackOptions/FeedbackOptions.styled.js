import styled from 'styled-components';

export const ButtonsWrapper = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const Button = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]};
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};

  color: ${p => p.theme.colors.black};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const FeedbackItem = styled.li`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[4]};
  /* &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  } */
`;
