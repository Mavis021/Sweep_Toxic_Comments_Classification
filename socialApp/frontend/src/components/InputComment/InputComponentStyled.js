import styled from 'styled-components'

const InputComponentStyled = styled.input`
  width:95%;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #6200ea;
  }

`

export default InputComponentStyled
