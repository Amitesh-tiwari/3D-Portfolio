import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas, EarthCanvas} from './components';
import { Analytics } from '@vercel/analytics/react';

const App = ()=> {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
        <Contact/>
        <StarsCanvas/>
    </div>
    <Analytics/>
    </BrowserRouter>
  )
}
export default App;
