import logo from './logo.svg';
import './App.css';

function App() {

  let post = '서울'

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>blog</h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
