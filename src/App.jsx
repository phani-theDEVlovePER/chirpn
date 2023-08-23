// import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DataContainer from './components/DataContainer'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <section className='min-w-[98vw] pagebg mt-4 flex flex-col items-center justify-center gap-[5rem]'>

        {/* hero */}
        <Hero />

        {/* datacontainer */}
        <DataContainer />

        {/* contact */}
        <Contact />
      </section>

      {/* footer */}
      <Footer />
    </>
  )
}

export default App
