import React from 'react'
import { screen, render } from '@testing-library/react'
import Signup from './Signup'

describe('Customer sign up form', () => {
  it('Finds heading', () => {
    render(<Signup />)
    const heading = screen.getByText('Sign up: Customer')
    expect(heading).not.toBe(undefined)
  })
})