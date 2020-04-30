import './static/styles/bootstrap.min.css'
import './static/styles/global.css'
import 'firebase/auth'
import 'firebase/firestore'

import React from 'react'
import FirebaseProvider from './src/components/FirebaseProvider'
export const wrapRootElement = ({ element }) => <FirebaseProvider>{element}</FirebaseProvider>
