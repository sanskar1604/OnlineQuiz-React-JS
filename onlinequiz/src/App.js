import logo from './logo.svg';
import './App.css';
import Navbar from './Components/AdminComponents/Navbar';
import Sidebar from './Components/AdminComponents/Sidebar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Components/AdminComponents/MainComponent/Dashboard';
import Users from './Components/AdminComponents/MainComponent/Users';
import Teachers from './Components/AdminComponents/MainComponent/Teachers';
import Topics from './Components/AdminComponents/MainComponent/Topics';
import Quiz from './Components/AdminComponents/MainComponent/Quiz';
import Questions from './Components/AdminComponents/MainComponent/Questions';
import Logout from './Components/AdminComponents/Logout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path = '/' element = {<Dashboard />}/>
          <Route path = '/users' element = {<Users />}/>
          <Route path = '/teachers' element = {<Teachers />}/>
          <Route path = '/topics' element = {<Topics />}/>
          <Route path = '/quizzes' element = {<Quiz />}/>
          <Route path = '/questions' element = {<Questions />}/>
          <Route path = '/logout' element = {<Logout />}/>
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
