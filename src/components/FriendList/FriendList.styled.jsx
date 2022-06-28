import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.small};
  box-shadow: 7px 7px 39px 12px rgba(191, 115, 191, 0.76);
`;

export const Indicator = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'red' : 'blue')};

  border-radius: ${p => p.theme.radii.round};
`;
