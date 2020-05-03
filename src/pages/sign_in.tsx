import React, { useState } from 'react'
import SignInForm from '../components/Forms/SignIn'
import Layout from '../components/Layout'
import SignInWithGoogle from '../components/SignInWithGoogle'
import { withFirebase } from '../Contexts/Firebase'
import WaitSpinner from '../components/WaitSpinner'
import PageTitle from '../components/PageTitle'

interface IProps {
  firebase: any
}
const SignIn: React.FC<IProps> = ({ firebase }) => {
  const [isShowOverlay, setShowOverlay] = useState(false)

  const handleCallback = value => {
    setShowOverlay(value)
  }

  return (
    <Layout title={'Login'}>
      {isShowOverlay ? <WaitSpinner /> : null}
      <PageTitle title={'Login Below'} />
      <SignInForm firebase={firebase} parentCallback={value => handleCallback(value)} />
      <h5 className="mt-4 mb-4 text-center">OR</h5>
      <SignInWithGoogle />
    </Layout>
  )
}

export default withFirebase(SignIn)
