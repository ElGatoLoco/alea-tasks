import styled, { css } from 'styled-components';

const textStyle = css`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.font.family.regular};
  color: ${({ theme }) => theme.font.color.light};
`;

export const H1 = styled.h1`
  ${textStyle}
`;
export const H2 = styled.h2`
  ${textStyle}
`;
export const H3 = styled.h3`
  ${textStyle}
`;
export const Paragraph = styled.p`
  ${textStyle}
`;
