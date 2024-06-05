import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Freebook from '../component/Freebook'
import Footer from '../component/Footer'
import { useAuth } from '../context/AuthPro'

function Home() {
  const [authUser] = useAuth()
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        {authUser ? <Freebook /> : <Message />}
        <Footer />
      </div>
    </>
  )
}

const Message = () => {
  return (
    <div className=' min-h-screen'>
      <div className=' flex align-middle justify-center min-h-screen'>
        <h1>Login first</h1>
      </div>
    </div>
  )
}

export default Home