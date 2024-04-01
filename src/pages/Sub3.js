import React from 'react';
import { useState, useEffect } from 'react';

const Sub3 = () => {

  let [count, setCount] = useState(0);
  let [alert, setAlert] =useState(true);

  /* useEffect(()=> {
    setTimeout(() => {setAlert(false)}, 3000)
  }) */

  //브라우저는 이 코드가 모두 실행된다음(에러없이) html코드를 실행
  /* for (let i=1; i<10000; i++) {
    console.log('i:', i)
  } */

  useEffect(()=>{
    //html코드가 모두 렌더링 된 후에 이 코드가 실행
    /* for (let i=1; i<10000; i++) {
      console.log('i:', i);
      console.log('useEffect')
    } */

    let a = setTimeout(() => {setAlert(false)}, 3000);
    console.log(2);

    return () => {
      //기존 타이머 제거 -> useEffect 동작 전에 실행 구문 return () => {}
      console.log(1);
      clearTimeout(a);
      //기존 데이터 요청은 제거해주세요
    }
  },[count])
  return (
    <div>
        <h1>useEffect</h1>
        {count}
        <button onClick={()=>setCount(count+1)}>버튼</button>
        {
          alert === true 
          ? <div className='alert alert-danger'>3초 이내 구매시 20% 할인</div>
          : null
        }
    </div>
  )
}

export default Sub3