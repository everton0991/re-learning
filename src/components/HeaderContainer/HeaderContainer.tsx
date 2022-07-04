import { ReactElement } from 'react'
import { Container } from 'semantic-ui-react'

interface IProps {
  children: ReactElement
}

function HeaderContainer({ children }: IProps) {
  return (
    <div className="shadow-lg p-6">
      <Container>{children}</Container>
    </div>
  )
}

export default HeaderContainer
