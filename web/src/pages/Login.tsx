import React, { useState } from 'react'
import { useLoginMutation } from '../generated/graphql'
import { RouteComponentProps } from 'react-router'

interface Props {}

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login] = useLoginMutation()

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        console.log('from submitted')
        console.log(email, password)
        const response = await login({
          variables: {
            email,
            password,
          },
        })
        history.push('/')
        console.log(response)
      }}
    >
      <div>
        <input
          value={email}
          placeholder='email'
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div>
        <input
          type='password'
          value={password}
          placeholder='password'
          onChange={e => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <button type='submit'>login</button>
    </form>
  )
}
