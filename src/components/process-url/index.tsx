import React, { useEffect, useState } from 'react'
import withLocation from '../../contexts/location'
import EmailVerified from '../email-verified'
import EmailNotVerified from '../email-not-verfied'
import WaitSpinner from '../wait-spinner'

interface IProps {
  authUser: any
  firebase: any
  params: any
}

const ProcessUrl: React.FC<IProps> = ({ authUser, firebase, params }) => {
  const [isEmailVerified, setEmailVerified] = useState(false)
  const [isUrlProcessed, setUrlProcessed] = useState(false)
  const [isVerifyFailed, setVerifyFailed] = useState(false)

  const { mode, oobCode } = params
  console.log('processUrl', mode, authUser)
  useEffect(() => {
    if (mode === 'verifyEmail') {
      firebase
        .auth()
        .applyActionCode(oobCode)
        .then(function (resp) {
          // Email address has been verified.
          setEmailVerified(true)
          setUrlProcessed(true)
        })
        .catch(function (error) {
          setUrlProcessed(true)
          setVerifyFailed(true)
          console.error(error, 'Email could not be verified')
        })
    } else {
      setUrlProcessed(true)
    }
  }, [])

  return (
    <>
      {isEmailVerified ? (
        <EmailVerified authUser={authUser}></EmailVerified>
      ) : (
        <>
          (
          {isUrlProcessed ? (
            <EmailNotVerified authUser={authUser} isVerifyFailed={isVerifyFailed}></EmailNotVerified>
          ) : (
            <>
              <WaitSpinner text="Verifying your Email..."></WaitSpinner>
            </>
          )}
          )
        </>
      )}
    </>
  )
}

export default withLocation(ProcessUrl)
