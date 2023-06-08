import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;

    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  margin: 3.8rem auto 10rem;

  max-width: 55rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2rem;
    }
  }

  > div {
    margin-bottom: 1.6rem;
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > :nth-child(4) {
    margin-bottom: 4.7rem;

    div {
      margin-bottom: 2rem;
    }
  }

  > button {
    margin-top: 2.6rem;
  }
`
