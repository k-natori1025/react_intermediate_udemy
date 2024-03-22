import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <SHeader>
      <nav>
        <SLink to="/top">Top</SLink>
        <SLink to="/users">ユーザー一覧</SLink>
        <SLink to="/home">Home</SLink>
        <SLink to="/basichooks">BasicHooks</SLink>
        <SLink to="/page1">Page1</SLink>
        <SLink to="/page2">Page2</SLink>
      </nav>
    </SHeader>
  )
}

export default Header

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`

const SLink = styled(Link)`
  margin: 0 8px;
`
