import { useEffect } from 'react'
import { ethers } from 'ethers'
import { Header } from 'semantic-ui-react'
import { Navigation, ContentWrapper } from 'components'

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
  const getBalance = async () => {
    const balance = await provider.getBalance(account)
    console.log(balance)
    return balance
  }

  useEffect(() => {
    getBalance()
  }, [])

  return (
    <>
      <Navigation />
      <ContentWrapper>
        <Header as="h1">
          {/* TODO Add localization/internatiolization for static texts */}
          Wallet
        </Header>
      </ContentWrapper>
    </>
  )
}

export default Home
