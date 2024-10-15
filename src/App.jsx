import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import QnA from './pages/QnA'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/qna" element={<QnA/>}/>
      </Routes>
    </Router>
  )
}
