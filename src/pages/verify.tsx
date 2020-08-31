import React, { useEffect, useState } from 'react'
import WaitSpinner from '../components/wait-spinner'
import { withFirebase } from '../contexts/fbase'
import { withAuthentication } from '../contexts/fbase'
import { navigate } from 'gatsby'
import ProcessUrl from '../components/process-url'

interface IProps {
  authUser: any
  firebase: any
  params: any
}

const Verify: React.FC<IProps> = ({ authUser, firebase }) => {
  const [isSecurityChecked, setSecurityChecked] = useState(false)

  console.log('verify', authUser)

  useEffect(() => {
    if (authUser && authUser.emailVerified) {
      if (typeof window !== 'undefined') navigate('/manufacturers')
    } else {
      setSecurityChecked(true)
    }
  }, [])

  return (
    <>
      {isSecurityChecked ? (
        <ProcessUrl authUser={null} firebase={firebase}></ProcessUrl>
      ) : (
        <WaitSpinner text="Processing..."></WaitSpinner>
      )}
    </>
  )
}

export default withFirebase(withAuthentication(Verify))
