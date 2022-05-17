import { InjectedConnector } from "@web3-react/injected-connector"

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    3, // Ropsten
    4, // Rinkeby
  ],
})

type Networks = Record<number, string>
export const networks: Networks = {
  3: "Ropsten",
  4: "Rinkeby",
}
