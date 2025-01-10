import './App.css'
import React from 'react'
import Header from './components/Header'
import AnimatedCursor from "react-animated-cursor";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
      <div>
       {/* <AnimatedCursor
        color="255, 255, 255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.1}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
        showSystemCursor={true}
      /> */}
      <Header/>
      <Home/>
      <About/>
      <Skills />
      <Resume />
    </div>
  )
}

export default App;