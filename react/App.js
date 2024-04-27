import logo from './logo.svg';
import advertise from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let blogName = "ReactBlog";
  let [글제목, UpdateList] = useState(['남자코트 추천', '강남우동 맛집', '파이썬 독학']);
  let [like, LikeUP] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ blogName }</h4>
      </div>
      
      <button
        onClick={()=> { let copy = [...글제목];
          copy[0] = '여자코트 추천';
          UpdateList(copy)}}>변경 버튼</button>
      <button onClick={
      ()=> {let copy1 = [...글제목];
        copy1.sort();
        UpdateList(copy1);
      }}>가나다순정렬</button>
      
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ ()=> { LikeUP(like++) } }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>
      <br></br>
      <Showcopyright/>

    </div>
  );
}

function Modal() {
  return(
    <div className='modal'>
      <h4>글제목</h4>
      <p>날짜</p>
      <p>상세페이지 내용</p>
    </div>
  );
}

function Showcopyright() {
  return (
    <>
      <div className='copyright'>
        <span>회사명: 이러쿵저러쿵 컴퍼니</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>대표자: 홍길동</span>
      </div>
      <div className='floatBox'>
        <img src={advertise} alt='ad' style={{width: '100%', height: '100%'}}></img>
      </div>
    </>
  );
}

export default App;