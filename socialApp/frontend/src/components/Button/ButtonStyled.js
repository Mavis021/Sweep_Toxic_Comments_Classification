import styled from 'styled-components'

const ButtonStyled = styled.button`
    background-color: #C6A9E8;
    width: 100px;
    height: 40px;
    border: solid 1px #C6A9E8;
    color: black;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;

    &:hover {
      background-color: black;
      color: #C6A9E8;
    }

    &:disabled {
    opacity: 0.5;
    }
`

export default ButtonStyled