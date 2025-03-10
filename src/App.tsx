// import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import HeaderComponent from './Components/headerComponent';
function App() {

  return (
    <><BrowserRouter>
    <HeaderComponent/>
    <Routes>
      {/* <Route path = "/" element ={}/> */}
      </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
