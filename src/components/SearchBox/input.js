import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import styled from '@emotion/styled'

const StyledInput = styled.input`
  background: white;
  color: black;
  width: 300px;
  height: 36px;
  margin-bottom: 10px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: auto;
`

export default connectSearchBox(({ refine, ...rest }) => {
  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <StyledForm onSubmit={e => submitHandler(e)}>
      <div>
        <StyledInput
          type="search"
          placeholder={`Hello ${rest.user.displayName.split(' ')[0]}, explore the library here`}
          aria-label="Search"
          onChange={e => refine(e.target.value)}
          {...rest}
        />
      </div>
    </StyledForm>
  )
})
