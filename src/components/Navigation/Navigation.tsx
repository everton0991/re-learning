import { Container, Menu } from 'semantic-ui-react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

function Navigation() {
  // TODO Mopve to its own utility
  const matchCurrentPath = (to: string) => {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: true })
    return Boolean(match)
  }

  return (
    <Menu borderless inverted>
      <Container text>
        <Menu.Item active={matchCurrentPath('/')} as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item active={matchCurrentPath('/party')} as={Link} to="/party">
          Players Party
        </Menu.Item>
        <Menu.Item active={matchCurrentPath('/wallet')} as={Link} to="/wallet">
          Wallet
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navigation
