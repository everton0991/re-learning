import { useEffect } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { ContentWrapper, HeaderContainer } from 'components'

export interface IState {
  people: {
    age: number
    name: string
    url: string
    note?: string
  }[]
}

function CarConfigurator() {
  useEffect(() => {
    console.log('hi Bimmer')
  }, [])

  return (
    <>
      <HeaderContainer>
        <Header as="h1">
          {/* TODO Add localization/internatiolization for static texts */}
          <strong>BMW</strong> 330i Sedan
        </Header>
      </HeaderContainer>

      <ContentWrapper>
        <Grid divided className="min-h-full" columns={2}>
          <Grid.Column>
            <p>Some content later..</p>
          </Grid.Column>
          <Grid.Column>
            <p>Some content later..</p>
          </Grid.Column>
        </Grid>
      </ContentWrapper>
    </>
  )
}

export default CarConfigurator
