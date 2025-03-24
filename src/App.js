import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import PreLoader from './components/Pre Loader/PreLoader';

function App() {

  const [preLoader, setPreLoader] = useState(true);
  useState(() => {
    setTimeout(() => {
      setPreLoader(false)
    }, 1000);
  }, []);

  return (
    <Router>
      {
        preLoader ? <PreLoader />
          :
          <div className="App">
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/projects' exact element={<Projects />} />
            </Routes>
          </div >
      }

    </Router>
  );
}

export default App;
