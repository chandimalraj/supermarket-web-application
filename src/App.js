import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link
          } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login'
import Store from './components/Store';
import Testing from './components/Testing';

function App() {
  return (
      <Router>

        <Routes>

        <Route exact path='/' element={<Home/> }></Route> 
        <Route exact path='/register' element={<Register/>}></Route>
            
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/store' element={<Store/>}></Route>
        <Route exact path='/testing' element={<Testing/>}></Route>

        </Routes>

      </Router>
    
     
    
  );
}

export default App;
