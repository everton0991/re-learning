import { render } from '@testing-library/react'
import AddToList from './AddToList'

// TODO Add test coverage - At least 80%
it('renders correctly', () => {
  const tree = render(
    <AddToList
      people={[{ name: '', age: 20, note: '', url: '' }]}
      setPeople={jest.fn()}
    />
  )
  expect(tree).toMatchSnapshot()
})
