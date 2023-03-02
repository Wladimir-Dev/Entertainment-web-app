import { Movies } from './Components/Movies';


import './App.css';
import './App-desktop.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu';
import { Home } from './Components/Home';
import { SavedMovies } from './Components/SavedMovies';
import { useSavedMovie } from './hooks/useSavedMovie';



function App() {

  const moviesSaved = useSavedMovie();

  console.log("render App")
  return (

    <div className="App">

      <HashRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home moviesSaved={moviesSaved} />} />
          <Route path='/savedMovies' element={<SavedMovies moviesSaved={moviesSaved} />} />
          <Route path="*" element={<h1>no found</h1>} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
