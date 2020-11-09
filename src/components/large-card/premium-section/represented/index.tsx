import React, { Fragment } from 'react'

interface IProps {
  companies: [string]
}

const Represented: React.FC<IProps> = ({ companies }) => {
  console.log('companies', companies)

  const represented = companies?.map((item, index) => {
    return (
      <Fragment key={`represented-${index}`}>
        <a href={`https://www.bibliotech.ca/manufacturer/${item}`}>
          <span style={{ color: 'blue' }}>Company {index + 1}</span>
        </a>
        <br></br>
      </Fragment>
    )
  })

  return <Fragment>{represented}</Fragment>
}

export default Represented
