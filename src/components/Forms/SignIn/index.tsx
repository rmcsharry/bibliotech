import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { navigate } from 'gatsby'

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
}

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  error: null,
  parentCallback: null,
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

  render(): JSX.Element {
    const { email, passwordOne, error } = this.state

    const isInvalid = passwordOne === '' || email === ''

    return (
      <Card className="p-3 p-sm-3 p-md-4 shadow mx-auto" style={{ maxWidth: '30rem' }}>
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

          <Button variant="primary" type="submit" disabled={isInvalid} className="mt-2">
            Submit
          </Button>
          {error && <p className="mt-4 p-2 text-white bg-danger">{error.message}</p>}
        </Form>
      </Card>
    )
  }
}

export default SignInForm
