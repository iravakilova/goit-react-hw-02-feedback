import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  padding: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.borderTable};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
