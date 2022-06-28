import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Title = styled.h2`
  box-sizing: border-box;
  text-align: center;
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[5]}px;
  width: 100%;
  height: 100px;

  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const ListItem = styled.li`
  background-color: ${getRandomHexColor()};
  flex-basis: calc((100%) / 5);
  height: 50px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
