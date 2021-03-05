import React, { useState } from 'react';


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const user = {user: {
      email,
      password,
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
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
    <div>
      <form onSubmit={handleSubmit}>
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
      
        <button type='submit' onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
