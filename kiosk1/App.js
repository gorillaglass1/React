import logo from './logo.svg';
import './App.css';
import MenuImage from './logo.svg';
import { useState } from 'react';

let company = 'Mecdonald'
let menu = ['클럽샌드위치', '햄치즈샌드위치', '콜라', '사이다', '오렌지주스'];
let price = [6000, 7000, 2000, 2000, 2500];
// let [selected, select] = useState([0, 0, 0, 0, 0]); //인덱스 = 메뉴, 값 = 선택

function App() {
  let [selected, select] = useState([0, 0, 0, 0, 0]); //인덱스 = 메뉴, 값 = 선택
  return (
    <div className="App">
          <div className="App">
            <div className='AppBar'>
              <img src={logo} className='App-logo'></img>
              {company}
            </div>
          </div>
      
          {
            menu.map((list, listCount)=>{
              return(
                <div className='MenuBar'>
                  <label onClick={()=> {
                      let copy = [...selected];
                      copy[listCount]++;
                      select(copy)
                      }}>
                    <p style={{fontWeight : 'bold'}}>{list}</p>
                      <hr style={{width: '90%'}}></hr>
                      <img src={MenuImage} className="image" alt="해당 이미지"/>
                      <p>가격: {price[listCount]}</p>
                      {/* <span className="selectButton" onClick={()=> {
                      let copy = [...selected];
                      copy[listCount]++;
                      select(copy)
                      }}>선택하기</span> */}
                    </label>
                </div>
              )
            }
            )
          }
      
          <div className='Cart'>
            <p>장바구니<span className="selectButton"
            onClick={()=> {
              let copy = [...selected];
              {copy.map((makeDefault, makeDefaultFN)=> {
                  copy[makeDefaultFN] = 0;
                })}select(copy);
            }}
            >초기화</span><span className="selectButton">결제하기</span></p>
            <hr></hr>
              <div className="CartList">
              {
            menu.map((list, listCount)=>{
              return(
                <div className='MenuBar'>
                <p>{list}</p>
                <p>{selected[listCount]}개</p>
                <hr style={{width: '90%'}}></hr>
                </div>
              )
            }
            )
            }
          </div>
        </div>
    </div>
  )
}

export default App;