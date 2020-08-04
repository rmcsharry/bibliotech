import './static/styles/bootstrap.min.css'
import './static/styles/global.css'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

import React from 'react'
import GlobalContextProvider from './src/contexts/global-context-provider'
export const wrapRootElement = ({ element }) => <GlobalContextProvider>{element}</GlobalContextProvider>
