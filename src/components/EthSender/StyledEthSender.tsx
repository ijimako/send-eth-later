import styled from "styled-components"

export const StyledEthSender = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vh;
  height: 40vh;
  background-color: rgb(25, 27, 31);
  color: rgb(33, 36, 151);
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: auto;
  border-radius: 0.5rem;
  border: 3px solid black;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.5);
  z-index: 1;

  h1 {
    font-size: 2rem;
    margin: 2rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input[type="text"] {
    margin: 0.5rem;
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.5);
    font-size: 1.5rem;
    font: inherit;
    color: rgb(33, 36, 151);

    &:focus {
      outline: none;
    }
  }

  .react-datetime-picker {
    background-color: #fff;
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    .react-datetime-picker__wrapper {
      border: none;
    }
    .react-datetime-picker__button svg {
      stroke: rgb(33, 36, 151);
    }
    .react-datetime-picker__inputGroup__input {
      color: rgb(33, 36, 151);
    }
    .react-calendar {
      border-radius: 0.5rem;
      padding: 0.5rem;
      width: 322.69px;

      .react-calendar__month-view__weekdays {
        font-size: 0.8rem;
      }
    }
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .success, a {
    color: #fff;
  }

  .success {
    padding: 1.5rem;
  }
`
