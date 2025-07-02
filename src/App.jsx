import './App.css'
import Tasks from './components/task';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Navbar from './components/navbar';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <center>
          <header>
            <h1> MY REACT APP </h1>
            <h2> MY FIRST APPLICATION </h2>
          </header>

        </center>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
