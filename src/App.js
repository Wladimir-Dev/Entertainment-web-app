import './App.css';
import { Movies } from './Components/Movies';
import { RxBookmark } from 'react-icons/rx';
import { SiNetflix } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { MdLocalMovies, MdDeviceUnknown } from "react-icons/md";
function App() {

  console.log("render App")
  return (

    <div className="App">
      <header>

        <figure><SiNetflix /></figure>

        <nav>
          <ul>
            <li><MdLocalMovies /></li>
            <li><RxBookmark /></li>
            <li><MdDeviceUnknown /></li>
          </ul>
        </nav>

        <div className="header-iconUser">
          {/* <img src='/' alt='profilepic' /> */}
          <FaUserCircle/>
        </div>

      </header>


      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
