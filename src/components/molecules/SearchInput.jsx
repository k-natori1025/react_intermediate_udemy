import React, { memo } from 'react'
import styled from 'styled-components'
import SecondaryButton from '../atoms/buttons/SecondaryButton'
import { Input } from '../atoms/input/input'

const SearchInput = memo(() => {
  console.log("SearchInputがレンダリングされたよ");
  return (
    <SContainer>
      <Input placeholder='検索条件を入力' />
      <SButtonWrapper>
        <SecondaryButton>検索</SecondaryButton>
      </SButtonWrapper>
    </SContainer>
  )
});

export default SearchInput

const SContainer = styled.div`
  display: flex;
  align-items: center;
`

const SButtonWrapper = styled.div`
  padding-left: 8px;
`
