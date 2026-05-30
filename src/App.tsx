import { RouterProvider } from 'react-router'
import { router } from './routes'
import { CartProvider } from './contexts/CartContext'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
        
    <CartProvider>
      <ToastContainer  />
    <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App