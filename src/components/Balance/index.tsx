import { useEffect } from "react"
import { Web3Provider } from "@ethersproject/providers"
import { formatEther } from "@ethersproject/units"
import { useWeb3React } from "@web3-react/core"
import useSWR from "swr"
import { fetcher } from "../../utils/fetcher"

export const Balance = () => {
  const { account, library } = useWeb3React<Web3Provider>()
  const { data: balance, mutate } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(library),
  })

  useEffect(() => {
    // listen for changes on an Ethereum address
    console.log(`Listening for blocks...`)
    if (library) {
      library.on("block", () => {
        console.log("Update balance...")
        mutate(undefined, true)
      })
      // remove listener when the component is unmounted
      return () => {
        library.removeAllListeners("block")
      }
    }
  }, [])

  return (
    balance && (
      <div className="balance">
        Ξ {parseFloat(formatEther(balance)).toPrecision(4)}
      </div>
    )
  )
}

export default Balance
