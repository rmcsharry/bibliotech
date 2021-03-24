import React, { useState } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { Search } from 'react-bootstrap-icons/'
import { StyledForm } from './styles'
import { StyledInput } from './styles'
import { StyledIcon } from './styles'

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
            <Search />
          </StyledIcon>
        ) : null}
      </div>
    </StyledForm>
  )
})
