import React, { useState } from 'react';
import { Form, Button } from "semantic-ui-react";


export default function Signup() {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const user = {user: {
      first_name,
      last_name,
      email,
      password,
      password_confirmation: passwordConfirm
    }
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(data => {
          debugger
          console.log(data)
          debugger
          if (data.token) {
            localStorage.setItem("token", data.token)
          }
          else {
            displayErrors(data)
          }
        })   
  }

  const displayErrors = (data) => {
    Object.entries(data).forEach(message => {
      alert(message)
    })
  }

  return(
      <Form onSubmit={handleSubmit}>
      <Form.Input
        type="firstName"
        label="firstName"
        name="firstName"
        placeholder="John"
        value={first_name}
        onChange={e => setFirstName(e.target.value)}
        required
        />
        <Form.Input
        type="lastName"
        label="lastName"
        name="lastName"
        placeholder="Doe"
        value={last_name}
        onChange={e => setLastName(e.target.value)}
        required
        />
        <Form.Input
          type="email"
          label="email"
          name="email" 
          placeholder="example@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Form.Input 
          type="password"
          label="password"
          name="off"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Form.Input 
          type="password"
          label="confirm password"
          name="off"
          placeholder="passwordConfirm"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          required
        />
        <Button type='submit' onSubmit={handleSubmit}>Submit</Button>
      </Form>
  )
}
