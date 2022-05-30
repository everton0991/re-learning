import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export interface IState {
  people: {
    age: number
    name: string
    url: string
    note?: string
  }[]
}

function Home() {
  return (
    <Menu borderless inverted fixed="top">
      <Container text>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/party">
          Players Party
        </Menu.Item>
        <Menu.Item as={Link} to="/wallet">
          Wallet
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Home
