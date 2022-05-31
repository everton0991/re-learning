import { useState } from 'react'
import { Header } from 'semantic-ui-react'
import { ContentWrapper, List, AddToList, Navigation } from 'components'

export interface IState {
  people: {
    age: number
    name: string
    url: string
    note?: string
  }[]
}

function Home() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      age: 36,
      note: 'Allergic to staying on the same team'
    },
    {
      name: 'Jhon Doe',
      url: 'https://cdn.nba.com/manage/2020/10/glenn-robinson-iii-iso-1101-784x523.jpg',
      age: 32,
      note: 'Nothing to say'
    }
  ])

  people.map((person) => {
    return person.age
  })

  return (
    <>
      <Navigation />
      <ContentWrapper>
        <>
          <Header as="h1">
            {/* TODO Add localization/internatiolization for static texts */}
            People invited to our Party
          </Header>

          <List people={people} />
          <AddToList people={people} setPeople={setPeople} />
        </>
      </ContentWrapper>
    </>
  )
}

export default Home
