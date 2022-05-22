import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
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

// TODO Move to config file
const rpcURL = 'https://mainnet.infura.io/v3/7a6e5d66ed4448cea122f3cff1d1f89f'
const provider = new ethers.providers.JsonRpcProvider(rpcURL)
const signer = provider.getSigner()
const account = '0x90e63c3d53E0Ea496845b7a03ec7548B70014A91'

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

  const getBalance = async () => {
    const balance = await provider.getBalance(account)
    console.log(balance)
    return balance
  }

  useEffect(() => {
    getBalance()
  }, [])

  people.map((person) => {
    return person.age
  })

  return (
    <Container className="container mx-auto my-10">
      <Segment vertical>
        <Header as="h1" textAlign="center">
          {/* TODO Add localization/internatiolization for static texts */}
          People invited to our Party
        </Header>
      </Segment>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </Container>
  )
}

export default Home
