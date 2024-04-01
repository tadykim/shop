import React from 'react';
import Card from '../component/Card';

const Homepage = (props) => {
  return (
    <div>
        <div className='main-bg'>
            <h1>STAY MIND</h1>
            <p>내 인생 첫 그림구독 <br />지금 시작해보세요</p>
        </div>
        
        <div className="container">
            <div className="row pic-area">
                {
                    props.pic.map((item, i)=> (
                        <Card 
                        key={i} 
                        item={item} 
                        imgSrc={`/img/img0${i + 1}.jpg`} //인덱스를 이용해서 이미지를 동적으로 생성
                        id={i}
                        /> 
                    ))
                }
               
            </div>
        </div>
    </div>
  )
}

export default Homepage
