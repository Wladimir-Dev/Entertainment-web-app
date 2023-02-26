import './App.css';
import { Movies } from './Components/Movies';

function App() {

  console.log("render App")
  return (

    <div className="App">
      <header>

        <figure>logo</figure>

        <nav>
          <ul>
            <li>all</li>
            <li>tendencias</li>
            <li>Favoritas</li>
          </ul>
        </nav>

        <div>
          <img src='/' alt='profilepic' />
        </div>

      </header>


      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
