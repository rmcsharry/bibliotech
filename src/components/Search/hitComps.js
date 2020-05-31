import React, { Fragment } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledHeader = styled.h4`
  font-size: 14px;
  line-height: 1;
  margin-bottom: 0;
`

export const ManufacturerHit = clickHandler => ({ hit }) => {
  return (
    <div>
      <Link to={`/manufacturer/` + hit.objectID} onClick={clickHandler}>
        <StyledHeader>
          <Highlight attribute="data.Manufacturer" hit={hit} tagName="mark" />
        </StyledHeader>
      </Link>
      {/* <Snippet attribute="data.KEYWORDS" hit={hit} tagName="mark" /> */}
    </div>
  )
}
