import styled from "styled-components"

export const Input = (props) => {
  // placeholderはdefalutで空文字
  const { placeholder = "" } = props;

  return(
    <SInput type="text" placeholder={placeholder}></SInput>
  )
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 100px;
`
