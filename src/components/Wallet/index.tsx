import { useWeb3React } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"
import Balance from "../Balance"
import { networks } from "../../utils/networks"
import { StyledWallet } from "./StyledWallet"
import truncate0xAddress from "../../utils/truncate0xAddress"

export const Wallet = () => {
  const { chainId, account, active } = useWeb3React<Web3Provider>()

  return (
    <StyledWallet>
      {active && chainId && account && (
        <>
          <div className="network">
            <span className="green-dot">●</span> {networks[chainId]}
          </div>
          <div className="address">{truncate0xAddress(account)}</div>
          <Balance />
        </>
      )}
    </StyledWallet>
  )
}

export default Wallet
