import { FormEvent, useState } from "react"
import { useWeb3React } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"
import { StyledEthSender } from "./StyledEthSender"
import { sendEthAtTimeHandler } from "../../contracts/sendEthAtTimeHandler"
import DateTimePicker from "react-datetime-picker"
import ConnectWallet from "../ConnectWallet"

export const EthSender = () => {
  const [recipient, setRecipient] = useState("")
  const [dateTime, setDateTime] = useState(new Date())
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [txnHash, setTxnHash] = useState("")
  const { active, library } = useWeb3React<Web3Provider>()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      const txnHashResult = await sendEthAtTimeHandler(
        library?.getSigner(),
        amount,
        recipient,
        dateTime
      )
      setLoading(false)
      txnHashResult && setTxnHash(txnHashResult)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  return (
    <StyledEthSender className="eth-sender">
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : txnHash ? (
        <div className="success">
          <p>Your Ξ has been sent. ✅ </p>
          <p>
            They will be transfered to the recipient address at the specified
            date and time provided.
          </p>
          <a
            href={"https://ropsten.etherscan.io/tx/" + txnHash}
            aria-label="Link to Etherscan to view transaction"
            target="_blank"
            rel="noreferrer"
          >
            View in explorer
          </a>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <DateTimePicker onChange={setDateTime} value={dateTime} />
          {active ? (
            <button type="submit" className="send-eth">
              Send Ξ in the future!
            </button>
          ) : (
            <ConnectWallet />
          )}
        </form>
      )}
    </StyledEthSender>
  )
}

export default EthSender
