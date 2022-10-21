

// import { addListener } from "nodemon";
// import { React, useEffect } from "react";
// import Nav from "../Nav";

// // 륜하 

// function Mypage() {

// /**
// 1. 지갑연결 -> useEffect
// 연결 X -> 주소란에 , 사이트창에 "아직 연결 안 됐습니다" 알림
// 연결 O -> 주소란에 자기 acount 보임, 사이트창에 자기가 소유한 nft가 보임 
// 2. 소유한 nft에 sell 버튼 달기 
// 3. 서버에 값 보내고 정보 받기; 간단하게 보이는 화면 -> 개별 nft 누르면 Detail.js로 이동  
//   - nft url
//   - nft name
//   - nft 가격
//   4. 서버에 sell 요청 보내면 "(임의)판매가 완료되었습니다~" 등의 문구가 뜨도록 <- 문구는 백에서 알아서 
//  */

//   const [connection, setConnection] = useState(false); // false = 지갑 연결 X

  
// // 1. 지갑 연결  
// // 지갑 연결을 보여주는 아이콘? div? 는 어디에 있지? 
//   useEffect(() => {
//     // 지갑 연결이 안 되어 있으면, 연결 안 되었습니다(알림창)
//     if (connection){ // connection 인자로 받는 것만으로 조건문이 가능한가? 
//       onclick={() => alert("지갑이 연결되지 않았습니다")};
//       return;
//     }
//     // 지갑이 연결되어 있으면, url주소에 account 보이고(-> 어떻게 하는지 모름)
//       onClick={ setConnection(true), alert("지갑이 연결되었습니다")};
//   })



// // 2. 보유한 nft 
//   <takeNFT />;  


// // 3. nft 누르면 Detail.js 로 이동 

// // 4. nft의 sell 버튼 누르면 서버에 post 요청

//   return (
//     <div>
//       <Nav />
//       Mypage Page

//     </div>
//   );
// }


//  // 갖고 있는 nft 생성 -> 반복이니까, 컴포넌트로?
// function takeNFT(){
//   return(
//     // nft 생성에서 반복되는 코드
//     <div>
//       {/* nft 대표 사진, css에서 flex? inline? 쓰면 딱 붙지 않을까? 
//         nft name 과 price 의 className을 nft 대표 사진과 동일하게 해야 할까? */}
//       <input className="picture" onChange={'nft 생성시 사용된 사진?'}/> 

//       <input type={text} name="nft name"/>
//       <input type={num} name="price"/>

//       <button className="sell" onclick = {() => alert("판매가 완료되었습니다")}> Sell </button>
//     </div>
//   ); 
// }

// export default Mypage; 