import styled from 'styled-components';

export default styled.div<{ highlight: boolean }>`
  text-align: center;
  border-width: 3px;
  border-style: ${({ highlight }) => (highlight ? 'dashed' : 'solid')};
  border-color: ${({ theme }) => theme.layout.accentColor};
  opacity: ${({ highlight }) => (highlight ? '0.5' : '1')};
  margin: 3px;
`;
