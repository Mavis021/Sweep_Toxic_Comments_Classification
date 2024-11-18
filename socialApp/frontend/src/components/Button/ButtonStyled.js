import styled from 'styled-components'

const ButtonStyled = styled.button`
    background-color: black;
    width: 100px;
    height:40px;
    border: solid 1px #000;
    color: white;
    padding: 10px;
    cursor: pointer;
    text-align: center;
    border-radius: 10px;

    &:hover{
      background-color: white;
      color: black;
    }

    &:disabled{
    opacity: 0.5;
    }
`

export default ButtonStyled