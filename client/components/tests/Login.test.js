import React from 'react'
import { screen, render } from '@testing-library/react'
import Login from '../Login'

describe('Customer sign up form', () => {
  it('Finds heading', () => {
    render(<Login />)
    const heading = screen.getByText('Sign up: Customer')
    // eslint-disable-next-line jest/prefer-to-be-undefined
    expect(heading).not.toBe(undefined)
  })
})
