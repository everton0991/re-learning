import { ReactElement } from 'react'
import { Container, Segment } from 'semantic-ui-react'

interface IProps {
  children: ReactElement
}

function ContentWrapper({ children }: IProps) {
  return (
    <Container className="container mx-auto">
      <Segment vertical>{children}</Segment>
    </Container>
  )
}

export default ContentWrapper
