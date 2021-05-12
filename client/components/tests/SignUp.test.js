import React from 'react'
import { screen, render } from '@testing-library/react'
import SignUp from '../SignUp'

describe('<SignUp />', () => {
  it('Finds the home button', () => {
    render(<SignUp />)

    const button = screen.getByRole('button', { name: /Home/i })
    // eslint-disable-next-line jest/prefer-to-be-undefined
    expect(button).not.toBe(undefined)
  })
})
