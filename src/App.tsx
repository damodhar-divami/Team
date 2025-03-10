import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Display from './Components/Display'
import HeaderComponent from './Components/headerComponent'
import { FormData } from './Pages/FormPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      <Route path = "/" element = {<FormData />} />
      <Route path = "/display" element = {<Display />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
