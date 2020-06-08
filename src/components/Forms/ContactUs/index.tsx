import React from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { navigate } from 'gatsby'
import { withFirebase } from '../../../contexts/Firebase'

interface IProps {
  firebase: any
}
interface IState {
  email: string
  firstName: string
  lastName: string
  message: string
  error: {
    message: string
  }
}

const INITIAL_STATE = {
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  error: null,
}

class ContactUsForm extends React.Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }

  onSubmit = event => {
    event.preventDefault()
    const messagesRef = this.props.firebase.database().ref('messages')
    messagesRef.push().set(
      {
        message: this.state,
      },
      error => this.firebaseCallback(error),
    )
  }

  firebaseCallback = error => {
    if (error) this.setState({ error })
    // TODO firebase api does not specify what error object shape is
    else navigate('/thank_you')
  }

  handleChange = <T extends keyof IState>(event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = {
      [event.target.name]: event.target.value,
    }
    this.setState(newState as { [P in T]: IState[P] })
  }

  render(): JSX.Element {
    const { email, firstName, lastName, message, error } = this.state

    const isInvalid = firstName === '' || lastName === '' || email === '' || message === ''

    return (
      <Card className="p-3 p-sm-3 p-md-12 shadow mx-auto" style={{ minWidth: '360px' }}>
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

          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="input"
              placeholder="Your first name"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="input"
              placeholder="Your last name"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Your message - we will reply asap"
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isInvalid} className="mt-2">
            Send
          </Button>
          {error && <p className="mt-4 p-2 text-white bg-danger">{error.message}</p>}
        </Form>
      </Card>
    )
  }
}

export default withFirebase(ContactUsForm)
