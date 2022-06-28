import styled from 'styled-components';

export const UserImg = styled.img`
  width: 50px;
  height: 50px;

  display: block;
  margin: 0 auto;

  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const UserText = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
`;

export const CartInfo = styled.ul`
  display: flex;
`;

export const CartInfoItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[3]}px;
  justify-content: center;
  flex-basis: calc((100% - 0) / 3);

  border: ${p => p.theme.borders.normal} rgba(28, 110, 164, 0.3);
  span {
    color: ${p => p.theme.colors.accent};
  }
`;
