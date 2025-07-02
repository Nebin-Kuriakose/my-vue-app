import './App.css'
import Tasks from './componenets/task';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './componenets/about';
import Navbar from './componenets/navbar';
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
