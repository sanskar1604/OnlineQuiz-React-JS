import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/UserComponents/Login';
import Register from './Components/UserComponents/Register';
import Instruction from './Components/UserComponents/Instruction';
import Footer from './Components/UserComponents/MainComponent/Footer';
import Navbar from './Components/UserComponents/MainComponent/Navbar';
import Quiz from './Components/UserComponents/Quiz';
import Submit from './Components/UserComponents/Submit';
import PageNotFound from './Components/UserComponents/PageNotFound';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path = '/' element = {<Login />}/>
          <Route path = '/login' element = {<Login />}/>
          <Route path = '/register' element = {<Register />}/>
          <Route path = '/instructions' element = {<Instruction />} />
          <Route path = '/quiz' element = {<Quiz />} />
          <Route path = '/submit' element = {<Submit />} />
          <Route path = '*' element = {<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}


export default App;
