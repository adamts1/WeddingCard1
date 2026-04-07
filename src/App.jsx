/**
 * App – routes each design to its own URL.
 * Add new designs by importing their page and adding a route.
 */

import { Routes, Route, Navigate } from 'react-router-dom'
import Design1Page from './designs/design1'
import Design2Page from './designs/design2'

export default function App() {
  return (
    <Routes>
      <Route path="/design1" element={<Design1Page />} />
      <Route path="/design2" element={<Design2Page />} />
      <Route path="*" element={<Navigate to="/design1" replace />} />
    </Routes>
  )
}
