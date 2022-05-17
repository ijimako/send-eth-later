import styled from "styled-components"

export const StyledWallet = styled.div`
  color: #fff;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;

  .green-dot {
    color: #00ff00;
  }

  .network, .address, .balance {
    margin-right: 1rem;
    padding: 0.7rem;
    border: 3px solid black;
    box-shadow: 0 0 0.7rem 0 rgba(0, 0, 0, 0.5);
    background-color: rgb(33, 36, 41);
    border-radius: 0.5rem;
  }
`
