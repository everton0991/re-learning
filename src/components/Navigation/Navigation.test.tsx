import { render } from '@testing-library/react'
import Navigation from './Navigation'

// TODO Add test coverage - At least 80%
it('renders correctly', () => {
  const tree = render(<Navigation />)
  expect(tree).toMatchSnapshot()
})
