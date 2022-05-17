import { Web3ReactProvider } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"
import "./App.css"
import Wallet from "./components/Wallet"
import EthSender from "./components/EthSender"

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="header">
        <div className="logo">
          <h1>Ethereum Sender</h1>
          <h5>Send ETH later whenever, at your conveniance.</h5>
        </div>
        <Wallet />
      </div>
      <EthSender />
    </Web3ReactProvider>
  )
}
