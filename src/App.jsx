import { useState } from 'react'
import './App.css'
import { AddStudent, StudentDetall, StudentList, EditStudent } from './Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <h1>React.js CRUD Operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/student/create" element={<AddStudent />} />
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/student/detail/:id" element={<StudentDetall />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
