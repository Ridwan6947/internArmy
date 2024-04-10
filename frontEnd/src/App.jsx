import './App.css'
import {Routes , Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import Home from './pages/home/Home.jsx'

function App() {

  return <div className='p-4 h-screen flex items-center justify-center'>
    {/* <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes> */}
    <Home/>
    <Toaster/>
  </div>
}

export default App
