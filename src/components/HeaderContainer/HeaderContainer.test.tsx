import { render } from '@testing-library/react'
import HeaderContainer from './HeaderContainer'

// TODO Add test coverage - At least 80%
it('renders correctly', () => {
  const tree = render(
    <HeaderContainer>
      <div>Text</div>
    </HeaderContainer>
  )
  expect(tree).toMatchSnapshot()
})
