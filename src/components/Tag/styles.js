import styled from 'styled-components'

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 1.2rem;

  padding: 0.5rem 1.4rem;
  margin-right: 0.5rem;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`
