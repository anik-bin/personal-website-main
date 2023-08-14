import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="container">
          <Navbar />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  )
}
