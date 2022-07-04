import { ReactElement } from 'react'
import { Container, Segment } from 'semantic-ui-react'

interface IProps {
  children: ReactElement
}

function ContentWrapper({ children }: IProps) {
  return (
    <Container fluid className="min-h-full">
      <Segment vertical>{children}</Segment>
    </Container>
  )
}

export default ContentWrapper
