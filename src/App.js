import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link
          } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import Store from './components/Store/Store.js';
import Testing from './components/Testing';
import Testing2 from './components/Testing2';

function App() {
  

  return (
      <Router>

        <Routes>

        <Route exact path='/' element={<Home/> }></Route> 
        <Route exact path='/register' element={<Register/>}></Route>
            
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path="/store" element={<Store/>}></Route>
        <Route exact path='/testing' element={<Testing/>}></Route>
        <Route exact path='/testing2' element={<Testing2/>}></Route>

        </Routes>

      </Router>
  );
}

export default App;
