import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas, EarthCanvas} from './components';

const App = ()=> {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover bg-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <div className = "z-0">
        <Contact/>
        <StarsCanvas/>
       </div>
    </div>
    
    </BrowserRouter>
  )
}
export default App;
