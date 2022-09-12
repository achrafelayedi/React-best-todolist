import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <h1>What is it today?</h1>

      <form autoComplete='off'>
        <input type="text" name="todos" id="todos" required placeholder='Add me to your todos please!' />

        <button type="submit" class="btn btn-primary">
          <i class="fa fa-check" aria-hidden="true"></i>
          Add
        </button>      
      </form>

      <ul>
        <li>
          <label htmlFor=''>
            <input type="checkbox" id="" />
            Coocking to do
          </label>
          <button>
            Edit
          </button>
        </li>
        <li>
          <label htmlFor='' >
            <input type="checkbox" id="" />
            Coocking to do
          </label>
          <button>
            Edit
          </button>
        </li>
      </ul>

      <div className='row'>
        <label>
          <input type="checkbox" name="all" id="all"/>
          All
        </label>
        <p>
          You have 0 to do
        </p>
        <i class="fa fa-trash-o" aria-hidden="true"></i>
        <button id='delete'>
          Delete
        </button>
      </div>
      {/* <i class="fa fa-pencil-square-o" aria-hidden="true"></i> */}
    </div>
  ); 
}

export default App;
