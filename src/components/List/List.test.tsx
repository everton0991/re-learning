import React from 'react'
import { render } from '@testing-library/react'
import List from './List'

it('renders correctly', () => {
  const tree = render(
    <List people={[{ name: '', age: 20, note: '', url: '' }]} />
  )
  expect(tree).toMatchSnapshot()
})
