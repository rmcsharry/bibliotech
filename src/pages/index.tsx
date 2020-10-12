import React from 'react'

import Layout from '../components/Layout/'
import IPageProps from '../types/page-props'
import { withFirebase } from '../firebase'
import Home from '../components/Home'

interface IProps extends IPageProps {
  listRef: any
}

class LandingPage extends React.Component<IProps> {
  constructor(props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div>
        <Layout location={this.props.location} authUser={null} firebase={this.props.firebase}>
          <Home></Home>
        </Layout>
      </div>
    )
  }
}

export default withFirebase(LandingPage)
