import styled from '@emotion/styled'

type WrapperProps = {
  minHeight: string
}
export const StyledBackgroundWrapper = styled.div<WrapperProps>`
  min-height: ${(props: WrapperProps) => (props.minHeight ? props.minHeight : '77vh')};
`
