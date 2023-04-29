import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 0 14.4rem;

    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 3rem;
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(3) {
    margin-bottom: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      width: 2rem;
      height: 2rem;
    }
  }
`
