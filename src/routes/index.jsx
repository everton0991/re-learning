import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from 'pages/Home'
import { Party } from 'pages/Party'
import { Wallet } from 'pages/Wallet'

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="party" element={<Party />} />
        <Route path="wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default routes
