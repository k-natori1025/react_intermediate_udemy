import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="/page1/detaila">Page1DetailA</Link>
      <Link to="/page1/detailb">Page1DetailB</Link>
      <Outlet />
    </div>
  )
}

export default Page1
