import React, { useState } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import styled from '@emotion/styled'
import { Search } from 'react-bootstrap-icons/'
import { mq } from '../../helpers/mq'

const StyledInput = styled.input`
  background: white;
  color: black;
  width: 300px;
  height: 36px;
  margin-bottom: 12px;

  ${mq('sm')} {
    margin-bottom: 0;
  }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: auto;
`
const StyledIcon = styled.span`
  right: 45px;
  position: absolute;
  top: 76px;

  ${mq('md')} {
    right: 30px;
    top: 23px;
  }
`

export default connectSearchBox(({ refine, ...rest }) => {
  const [isInputEmpty, setIsInputEmpty] = useState(true)

  const submitHandler = e => {
    e.preventDefault()
  }
  const onInputChange = e => {
    if (e.target.value.length > 0) {
      setIsInputEmpty(false)
    } else {
      setIsInputEmpty(true)
    }
    refine(e.target.value)
  }

  return (
    <StyledForm onSubmit={e => submitHandler(e)}>
      <div>
        {rest.user?.displayName ? (
          <StyledInput
            type="search"
            placeholder={`Hello ${rest.user?.displayName?.split(' ')[0]}, explore the library here`}
            aria-label="Search"
            onChange={e => onInputChange(e)}
            {...rest}
          />
        ) : (
          <StyledInput
            type="search"
            placeholder={`Explore the library here`}
            aria-label="Search"
            onChange={e => onInputChange(e)}
            {...rest}
          />
        )}
        {isInputEmpty ? (
          <StyledIcon aria-hidden="true">
            <Search></Search>
          </StyledIcon>
        ) : null}
      </div>
    </StyledForm>
  )
})
