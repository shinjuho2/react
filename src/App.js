/* esLint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '서울'
  let [글제목, 글제목1] = useState(['Python', 'Java', 'Go']);
  let [good, good1] = useState([0, 0, 0]);
  let [modal, setModal] = useState(0);
  let [title, settitle] = useState(0);
  let[input, setinput] = useState('');
  


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>blog</h4>
      </div>
      {/* <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목1(copy)
      }}> 정렬버튼 </button>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={() => { good1(good + 1) }}>👍</span> {good} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]} <span onClick={() => { 글제목1(['C', 'Java', 'Go']) }}>🔄️</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(!modal); settitle(i) }}>{글제목[i]} <span onClick={(e) => { 
                e.stopPropagation()
                let copy = [...good]
                copy[i] = copy[i] + 1
                good1(copy)
              }}>👍</span> {good[i]} </h4>
              <p>2월 17일 발행 <button className='del' >삭제</button></p> 
            </div>
          )
        })
      }

      <input onChange={ ()=>{

      } }></input>
      <button onClick={ (e) => {
        글제목1(e.target.value)
      } }>추가</button>

      {
        
      }

      {
        modal == 1 ? <Modal 글제목={글제목} title={title}></Modal> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
