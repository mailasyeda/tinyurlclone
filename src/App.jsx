
import Header from './components/Header'
import Mid from './components/Mid'
import './App.css'
import User from './components/User'
import VideoSection from './components/VideoSection'
import Feature from './components/Feature'
import FAQ from './components/FAQ'
import TransformSection from './components/TransformSection'
import Footer from './components/Footer'

function App() {


  return (
    <div className="bg-linear-to-r from-[#0c3b5a] via-[#0b3552] to-[#082a40] min-h-screen">
     <Header/>
     <Mid/>
    <User/>
    <VideoSection/>
    <Feature/>
    <TransformSection/>
    <FAQ/>
    <Footer/>
     </div>
    
     
  
  )
}

export default App
