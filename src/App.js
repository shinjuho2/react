/* esLint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '서울'
  let [글제목, 글제목1] = useState(['파이썬', '자바', '물고기']);
  let [good, good1] = useState(0);


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>blog</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => { good1(good + 1) } }>👍</span> { good } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } <span onClick={ () => { 글제목1(['파이썬', 'C언어', '물고기']) } }>🔄️</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
