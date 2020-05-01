import './static/styles/bootstrap.min.css'
import './static/styles/global.css'
import 'firebase/auth'
import 'firebase/firestore'

import React from 'react'
import GlobalContextProvider from './src/components/FirebaseProvider'
export const wrapRootElement = ({ element }) => <GlobalContextProvider>{element}</GlobalContextProvider>
