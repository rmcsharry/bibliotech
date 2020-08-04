import styled from '@emotion/styled'
import { mq } from './mq'

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  width: 80vw;
  max-width: 900px;
  background: white;
  padding: 2rem;
  margin: 50px auto;
  opacity: 0.88;
  p {
    font-size: 13px;
  }
  a {
    color: blue;
    text-decoration: underline;
  }

  ${mq('lg')} {
    p {
      font-size: 15px;
    }
  }
  object {
    height: 60vh;
  }
`
