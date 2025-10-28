
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Careers from './pages/Careers'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/carreiras" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
