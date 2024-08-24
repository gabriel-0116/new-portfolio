import About from "./components/Container/About"
import HardSkills  from "./components/Container/HardSkills/index"
import Home from "./components/Container/Home"
import Navbar from "./components/Container/Navbar"
import { Background } from "./components/lib/Background/Background"
import SocialMedia from "./components/SocialMedia"


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <SocialMedia />
        <About />
        <HardSkills />
      </div>
    </>
  )
}

export default App
