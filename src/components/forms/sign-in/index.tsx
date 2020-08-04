import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { navigate } from 'gatsby'
import { StyledCardContainer } from '../../../helpers/styled-card-container'

interface IProps {
  firebase: any
  parentCallback: (value: boolean) => void
}
interface IState {
  email: string
  passwordOne: string
  error: {
    message: string
  }
  forgotText: string
}

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  error: null,
  parentCallback: null,
  forgotText: 'Forgot password?',
}

class SignInForm extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }

  onSubmit = event => {
    this.props.parentCallback(true)
    event.preventDefault()
    const { email, passwordOne } = this.state
    this.props.firebase
      .auth()
      .signInWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        if (typeof window !== 'undefined') navigate('/manufacturers')
      })
      .catch(error => {
        this.props.parentCallback(false)
        this.setState({ error })
      })
  }

  handleChange = <T extends keyof IState>(event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = {
      [event.target.name]: event.target.value,
    }
    this.setState(newState as { [P in T]: IState[P] })
  }

  handleForgot = () => {
    if (this.state.email) {
      this.setState({ error: { message: '' } })
      this.setState({ forgotText: 'Reset link sent' })
      this.props.firebase.auth().sendPasswordResetEmail(this.state.email)
    } else {
      this.setState({ error: { message: 'Enter your email address' } })
    }
  }

  render(): JSX.Element {
    const { email, passwordOne, error } = this.state

    const isInvalid = passwordOne === '' || email === ''

    return (
      <StyledCardContainer>
        <Card className="p-3 p-sm-3 p-md-4 shadow mx-auto">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email address"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="passwordOne"
                value={passwordOne}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">At least 6 characters.</Form.Text>
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit" disabled={isInvalid} className="mt-2">
                Sign In
              </Button>
              {this.state.forgotText === 'Forgot password?' ? (
                <Button variant="secondary" className="mt-2" onClick={this.handleForgot}>
                  {this.state.forgotText}
                </Button>
              ) : (
                <>
                  <div className="mt-2">
                    <p className="text-success" style={{ marginBottom: 0 }}>
                      {this.state.forgotText}
                    </p>
                    <small className="text-success">Check your inbox and spam</small>
                  </div>
                </>
              )}
            </div>
            {error && <p className="mt-4 p-2 text-white bg-danger">{error.message}</p>}
          </Form>
        </Card>
      </StyledCardContainer>
    )
  }
}

export default SignInForm
