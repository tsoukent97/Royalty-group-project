import React from 'react'
import { screen, render } from '@testing-library/react'
import SignUp from '../SignUp'

describe('<SignUp />', () => {
  it('Finds question text', () => {
    render(<SignUp />)

    const questionSpan = screen.getByRole('button', { name: /Home/i })
    // eslint-disable-next-line jest/prefer-to-be-undefined
    expect(questionSpan).not.toBe(undefined)
  })
})
