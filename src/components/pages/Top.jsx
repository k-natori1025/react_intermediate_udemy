import React from 'react'
// import { useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import DefaultLayout from '../templates/DefaultLayout'
import SecondaryButton from '../atoms/buttons/SecondaryButton'
// import { UserContext } from '../../providers/UserProvider'
import { useSetRecoilState } from 'recoil'
import { UserState } from '../../store/UserState'

const Top = () => {

  const navigate = useNavigate();

  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(UserState);

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true});
    navigate("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({isAdmin: false});
    navigate("/users");
  };

  return (
    <DefaultLayout>
      <SContainer>
        <h2>Topページです</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </SContainer>
    </DefaultLayout>
  )
}

export default Top

const SContainer = styled.div`
  text-align: center;
`
