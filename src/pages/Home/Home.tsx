import { useState } from 'react'
import { Container, Segment, Header } from 'semantic-ui-react'
import List from 'components/List/List'
import AddToList from 'components/AddToList/AddToList'

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
      name: 'LeBron James',
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      age: 36,
      note: 'Allergic to staying on the same team'
    }
  ])

  people.map((person) => {
    return person.age
  })

  return (
    <Container className="container mx-auto">
      <Segment vertical className="my-10 text-center">
        <Header as="h1">People invited to our Party</Header>
      </Segment>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </Container>
  )
}

export default Home
