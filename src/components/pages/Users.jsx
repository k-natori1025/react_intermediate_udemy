import React from 'react'
// import { useContext } from 'react'
import styled from 'styled-components'
import HeaderOnly from '../templates/HeaderOnly'
import SearchInput from '../molecules/SearchInput'
import UserCard from '../organisms/User/UserCard'
import SecondaryButton from '../atoms/buttons/SecondaryButton'
// import { UserContext } from '../../providers/UserProvider'
import { useRecoilState } from 'recoil'
import { UserState } from '../../store/UserState'

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `hoge${val}`,
    image: "test.jpg",
    email: "test@example.com",
    phone: "08012345678",
    company: {
      name: "株式会社hoge"
    },
    website: "https://google.com"
  }
})

const Users = () => {

  // const { userInfo, setUserInfo } = useContext(UserContext);

  const [userInfo, setUserInfo] = useRecoilState(UserState);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  }

  return (
    <HeaderOnly>
      <SContainer>
        <h2>ユーザー一覧ページです</h2>
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>ユーザー切り替え</SecondaryButton>
        <SUsersArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUsersArea>
      </SContainer>
    </HeaderOnly>
  )
}

export default Users

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUsersArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
