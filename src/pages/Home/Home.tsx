import { Header } from 'semantic-ui-react'
import { Navigation, ContentWrapper } from 'components'

function Home() {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <Header as="h1">
          {/* TODO Add localization/internatiolization for static texts */}
          Home
        </Header>
      </ContentWrapper>
    </>
  )
}

export default Home
