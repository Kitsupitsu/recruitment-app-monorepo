import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCandidate from './components/AddCandidate';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<div></div>}/>
          <Route exact path='/ranking' element={<div></div>}/>
          <Route exact path='/add_candidate' element={<AddCandidate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
