import styled from '@emotion/styled'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

// display: ${props => (props.show ? `grid` : `none`)};
export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: calc(100vh - 160px);
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: 100%;
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: 4px;
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid grey;
  }
  li + li {
    margin-top: 0;
    padding-top: 0.7em;
    border-top: 1px solid light-grey;
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: black;
    background: white;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h5 {
      color: black;
      background: white;
      padding: 0.1em 0.4em;
      border-radius: 2px;
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`
