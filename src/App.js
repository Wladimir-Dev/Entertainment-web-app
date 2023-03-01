import { Movies } from './Components/Movies';


import './App.css';
import './App-desktop.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu';
import { Home } from './Components/Home';
import { SavedMovies } from './Components/SavedMovies';


function App() {

  console.log("render App")
  return (

    <div className="App">

      <HashRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/savedMovies' element={<SavedMovies />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
