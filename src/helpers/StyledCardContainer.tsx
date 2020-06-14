import styled from '@emotion/styled'
import { mq } from './mq'

export const StyledCardContainer = styled.div`
  min-width: 320px;
  ${mq('sm')} {
    min-width: 500px;
  }
`
