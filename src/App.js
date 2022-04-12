import './App.css'
import { Demo } from './components/parts/Demo'
import { Features } from './components/parts/Features'
import Footer from './components/parts/Footer'
import { Header } from './components/parts/Header'
import { Navbar } from './components/parts/Navbar'
import Pricing from './components/parts/Pricing'
import Template from './components/parts/Template'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Demo />
      <Features />
      <Template />
      <Pricing />
      <Footer />
    </>
  )
}

export default App
