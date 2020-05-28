import React from 'react'
import styled from '@emotion/styled'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled.div`
  width: 1em;
  pointer-events: none;
`

const expand = styled.div`
  background: white
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
`

export const Input = styled.input`
  background: white;
  color: black;
  width: 300px;
  height: 36px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: auto;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  ul {
    list-style: none;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: blue;
      padding: 0.1em 0.4em;
      border-radius: 4px;
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`
