import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
// import Projects from './Pages/Projects/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/projects' element={<Projects />} /> */}
      </Routes>
    </>
  )
}

export default App
