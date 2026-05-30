import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'


function RootLayout() {
    
  return (
    <div>
        
        <nav>
            <NavBar />
        </nav>

        <main>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>

    </div>
  )
}

export default RootLayout