/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { NavSide } from "./pages/components/sidenav"
import Login from "./pages/login"

function Dashboard() {
  return <div className="p-6">dahsboard</div>
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<LayoutWithSidebar />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

function LayoutWithSidebar() {
  return (
    <NavSide>
      <Outlet />
    </NavSide>
  )
}

export default App
