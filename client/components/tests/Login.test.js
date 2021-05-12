import React from 'react'
import { screen, render } from '@testing-library/react'
import Login from '../Login'

describe('Customer sign up form', () => {
  it('Finds heading', () => {
    render(<SignUp />)
    const heading = screen.getByText('Sign up: Customer')
    expect(heading).not.toBe(undefined)
  })
})