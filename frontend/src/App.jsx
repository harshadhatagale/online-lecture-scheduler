import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AdminRoute from './components/AdminRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateCourse from './pages/CreateCourse'
import CreateBatch from './pages/CreateBatch'
import ScheduleLecture from './pages/ScheduleLecture'
import MyLectures from './pages/MyLectures'

import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/create-course"
          element={
            <AdminRoute>
              <CreateCourse />
            </AdminRoute>
          }
        />

        <Route
          path="/create-batch"
          element={
            <AdminRoute>
              <CreateBatch />
            </AdminRoute>
          }
        />

        <Route
          path="/schedule-lecture"
          element={
            <AdminRoute>
              <ScheduleLecture />
            </AdminRoute>
          }
        />

        <Route
          path="/my-lectures"
          element={
            <ProtectedRoute>
              <MyLectures />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  )
}