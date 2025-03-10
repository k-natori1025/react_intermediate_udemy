import React, { memo } from 'react'
// import { useContext } from 'react';
import styled from 'styled-components';
// import { UserContext } from '../../../providers/UserProvider';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../store/UserState';

const UserIconWithName = memo((props) => {
  console.log("UserIconWithNameがレンダリングされました")

  const {image, name} = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(UserState);

  const isAdmin = userInfo? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt="プロフィール" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  )
});

export default UserIconWithName

const SContainer = styled.div`
  text-align: center;
`

const SImage = styled.img`
  border-radius: 50%;
`

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`
