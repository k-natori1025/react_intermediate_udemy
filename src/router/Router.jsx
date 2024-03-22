import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Top from '../components/pages/Top'
import Users from '../components/pages/Users'
import BasicHooks from '../BasicHooks'
import Home from '../Home'
import Page1 from '../Page1'
import Page1DetailA from '../Page1DetailA'
import Page1DetailB from '../Page1DetailB'
import Page2 from '../Page2'
import Page404 from '../Page404'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path ="/top" element={<Top />}/>
        <Route exact path ="/users" element={<Users />}/>
        <Route exact path="/basichooks" element={<BasicHooks />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page1/detaila" element={<Page1DetailA />}/>
        <Route path="/page1/detailb" element={<Page1DetailB />}/>
        <Route path="/page2" element={<Page2 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
