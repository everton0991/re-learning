import { render } from '@testing-library/react'
import List from './List'

// TODO Add test coverage - At least 80%
it('renders correctly', () => {
  const tree = render(
    <List people={[{ name: '', age: 20, note: '', url: '' }]} />
  )
  expect(tree).toMatchSnapshot()
})
