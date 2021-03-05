import React, { useState } from 'react';


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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
     
}

  const displayErrors = (data) => {
    Object.entries(data).forEach(message => {
      alert(message)
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="firstName"
        label="firstName"
        name="firstName"
        placeholder="John"
        value={first_name}
        onChange={e => setFirstName(e.target.value)}
        required
        />
        <input
        type="lastName"
        label="lastName"
        name="lastName"
        placeholder="Doe"
        value={last_name}
        onChange={e => setLastName(e.target.value)}
        required
        />
        <input
          type="email"
          label="email"
          name="email" 
          placeholder="example@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input 
          type="password"
          label="password"
          name="off"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input 
          type="password"
          label="confirm password"
          name="off"
          placeholder="passwordConfirm"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          required
        />
        <button type='submit' onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
