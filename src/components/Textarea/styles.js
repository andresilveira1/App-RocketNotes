import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 1rem;
  border: none;
  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 3.4rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
