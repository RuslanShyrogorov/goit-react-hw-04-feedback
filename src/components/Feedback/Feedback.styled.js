import styled from 'styled-components';

export const Title = styled.h2`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  /* :not(:last-child) {
    margin-right: ${p => p.theme.space[4]};
  } */
  margin-bottom: ${p => p.theme.space[5]};
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
  /* background-color: ${p => {
    return p.disabled ? p.theme.colors.muted : p.theme.colors.primary;
  }}; */
  color: ${p => p.theme.colors.black};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const FeedbackWrapper = styled.ul``;

export const FeedbackText = styled.li`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[4]};
  /* &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  } */
`;
