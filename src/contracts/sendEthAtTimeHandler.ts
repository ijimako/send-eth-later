import { Contract } from "@ethersproject/contracts"
import { Interface } from "@ethersproject/abi"
import EthSenderABI from "./abi/EthSender.abi.json"
import RegistryABI from "./abi/Registry.abi.json"
import {
  ethSenderContractAddress,
  registryContractAddress,
} from "./contractAddresses"
import { parseEther } from "@ethersproject/units"
import { JsonRpcSigner } from "@ethersproject/providers"

export const GAS_FOR_LATER_TXN = "0.01"

export const sendEthAtTimeHandler = async (
  signer: JsonRpcSigner | undefined,
  amount: string,
  recipient: string,
  dateTime: Date
): Promise<string | undefined> => {
  try {
    // Generate callData needed to call newReq
    console.log(`Generate callData needed to call newReq...`)
    const ethSenderInterface = new Interface(EthSenderABI)
    // const dateTimeUnix = new Date(dateTime).getTime() / 1000
    const dateTimeUnix = dateTime.getTime() / 1000
    const callData = await ethSenderInterface.encodeFunctionData(
      "sendEthAtTime",
      [dateTimeUnix, recipient]
    )

    const registry = new Contract(registryContractAddress, RegistryABI, signer)

    let txn = await registry.newReq(
      ethSenderContractAddress,
      "0x0000000000000000000000000000000000000000",
      callData,
      parseEther(amount),
      false,
      false,
      false,
      {
        value: parseEther(
          (parseFloat(amount) + parseFloat(GAS_FOR_LATER_TXN)).toString()
        ),
      }
    )

    console.log(`Subimitting transaction through newReq, please wait...`)
    await txn.wait()

    console.log(
      `Transaction submitted: https://ropsten.etherscan.io/tx/${txn.hash}`
    )

    return txn.hash
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
