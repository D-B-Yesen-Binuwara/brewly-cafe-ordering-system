import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components/common/ErrorBoundary'
import { CustomerLayout } from './layouts/CustomerLayout'
import { CustomerMenuPage } from './pages/CustomerMenuPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlaceholderPage } from './pages/PlaceholderPage'

function AppRoutes() {
  return <Routes>
    <Route element={<ErrorBoundary><CustomerLayout /></ErrorBoundary>}>
      <Route index element={<Navigate to="/menu" replace />} />
      <Route path="menu" element={<CustomerMenuPage />} />
      <Route path="orders" element={<PlaceholderPage title="My orders" description="Your active and past orders will appear here." />} />
      <Route path="history" element={<PlaceholderPage title="Order history" description="Your previous Brewly visits will appear here." />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
}

export default function App() {
  return <BrowserRouter><AppRoutes /></BrowserRouter>
}
