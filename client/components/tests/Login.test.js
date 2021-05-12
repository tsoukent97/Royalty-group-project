import React from 'react'
import { screen, render } from '@testing-library/react'
import { Login } from '../Login'

describe('<Login />', () => {
  it('Finds the login button', () => {
    render(<Login />)

    const button = screen.getByRole('button', { name: /Home/i })
    // eslint-disable-next-line jest/prefer-to-be-undefined
    expect(button).not.toBe(undefined)
  })
})
