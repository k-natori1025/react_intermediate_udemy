import React from 'react'
import PrimaryButton from './components/atoms/buttons/PrimaryButton'
import SecondaryButton from './components/atoms/buttons/SecondaryButton'
import SearchInput from './components/molecules/SearchInput'

const Home = () => {

  return (
    <div>
      <h1>Homeページです</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      {/* <UserCard user={user} /> */}
    </div>
  )
}

export default Home
