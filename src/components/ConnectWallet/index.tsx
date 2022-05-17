import { Web3Provider } from "@ethersproject/providers"
import { useWeb3React } from "@web3-react/core"
import { injectedConnector } from "../../utils/networks"

export const ConnectWallet = () => {
  const { activate } = useWeb3React<Web3Provider>()

  return (
    <button
      type="button"
      onClick={() => {
        activate(injectedConnector)
      }}
      className="connect-wallet"
    >
      Connect Wallet
    </button>
  )
}

export default ConnectWallet
