import About from "./components/About"
import Experience from './components/Experience';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from './components/Skills';
import Testimonials from "./components/Testimonials";
import Work from './components/Work';
import Footer from './components/Footer';
import CopyFooter from "./components/CopyFooter";


const App = () => {
  return (
    <div className="pt-10 px-3 flex flex-col gap-y-20 bg-gray-100">
      {/* home */}
      <div className="bg-white p-3 ">
          <Header/>
          <Hero/>
      </div>

      {/* about */}
      <div>
        <About/>
      </div>
      {/* Skills */}
      <div>
        <Skills/>
      </div>
      {/* Experience */}
      <div>
        <Experience />
      </div>
      {/* Work */}
      <div>
        <Work/>
      </div>
      {/* Experience */}
      <div>
        <Testimonials/>
      </div>   
      {/* Footer    */}
      <div>
        <Footer/>
      </div>
      {/* copy rule */}
      <div>
        <CopyFooter/>
      </div>
    </div>
  )
}

export default App