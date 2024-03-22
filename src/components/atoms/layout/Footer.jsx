import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <SFooter>
      &copy; 2024 test inc.
    </SFooter>
  )
}

export default Footer

const SFooter = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`
