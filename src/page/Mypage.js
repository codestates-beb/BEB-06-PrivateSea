import React from "react";
import Nav from "../Nav";

function Mypage() {

/**
1. 지갑연결 
연결 X -> 주소란에 , 사이트창에 "아직 연결 안 됐습니다" 알림
연결 O -> 주소란에 자기 acount 보임, 사이트창에 자기가 소유한 nft가 보임 

2. 소유한 nft에 sell 버튼 달기 

3. 서버에 값 보내고 정보 받기; 간단하게 보이는 화면 -> 개별 nft 누르면 Detail.js로 이동  
  - nft url
  - nft name
  - nft 가격

  4. 서버에 sell 요청 보내면 "(임의)판매가 완료되었습니다~" 등의 문구가 뜨도록 <- 문구는 백에서 알아서 
 */
  return (
    <div>
      <Nav />
      Mypage Page
    </div>
  );
}

export default Mypage;
