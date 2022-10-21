
import { React, useState, useEffect } from "react";
import Nav from "../Nav";
import "./Create.css"

/** 륜하
1. 사용자가 nft 생성을 위해 필요한 정보 -> 모두 input 처리 
image 클릭하면 -> desktop 이나 image upload 
item name(nft name)
description
collection 
theme: 3가지 옵션 중 하나를 선택하도록 - art, sport, photo 

2. 서버에 보내줘야 하는 값 
1번의 정보 + account값

 */

function Create() {

  const [text, setText] = useState("");
  const [data, setData] = useState("");
  const onChange = (e) => setText(e.target.value);

  return (

    // 어디에다가 서버요청 하는 버튼? 같은 것을 위치시킬 것인가?


    <div>
      <Nav />
      <br/>

      <h1> Create New Item </h1>
      <h4 className="comment"> * Required fields </h4> 

      <div> Image, Video, Audio, or 3D Model </div>
      {/* 기본적으로 네모난 점선 박스가 있어서 onMouse 하면 업로드 되도록 */}

      <Upload setData={ setData }/>

      <Enter text={ text }> NFT 이름 </Enter>
      <Enter text={ text }> Collection 이름 </Enter>
      <Enter text={ text }> 설명 </Enter>

    <br />
      <div> <p> 테마 선택하기 </p>
        <select name = "theme">
          <option value={""} /> 테마 선택 
          <option value={"Art"} /> Art 
          <option value={"Sport"} /> Sport 
          <option value={"Phtography"} /> Photography 
        </select>
      </div>


    {/* 버튼 누르면 DB으로 post 요청 보내서 입력한 내용 객체로 저장 */}
    <button class="create"> Create </button>

    </div>
  );
}

// 데이터 업로드 하는 곳 - Create에서 data 받아오는 props 
function Upload(props){
  return(
    // 파일선택이라는 버튼이 아니라 큰 점선 박스로 하고 싶음... 함수?
    <input type="file" onClick={ props.setData('업로드하는 파일 url?') }></input> 
  )
}

// 입력창 
function Enter(props){
  <>
    <div> 설명하는 칸 </div>
    <input onChange={onchange} value={ props.text } /> <button> 확인 </button>
  </>
}



export default Create;
