import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Qna from './components/Qna/Qna'


function App() {


  return (
    <>
      <Header></Header>
      <Blog></Blog>
      <Qna></Qna>
    </>




  )
}

export default App
