import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Bye from './pages/Bye';
import Error from './pages/Error';
import Request from './pages/Request';
import Navbar from './components/Navbar';
import UserDetails from './pages/UserDetails';
import Post from './pages/Post';


function App(){
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Request/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/requests' element={<Request/>}></Route>
      <Route path='/bye' element={<Bye/>}></Route>
      <Route path='/:username' element={<UserDetails/>}></Route>
      <Route path='/post/:id' element={<Post></Post>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    
    </>

  )
}

export default App;