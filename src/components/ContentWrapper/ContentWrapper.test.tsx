import { render } from '@testing-library/react'
import ContentWrapper from './ContentWrapper'

// TODO Add test coverage - At least 80%
it('renders correctly', () => {
  const tree = render(
    <ContentWrapper>
      <div>Text</div>
    </ContentWrapper>
  )
  expect(tree).toMatchSnapshot()
})
