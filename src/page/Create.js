/* eslint-disable */

import { React, useState } from "react";
import axios from "axios";

<<<<<<< HEAD
function Create(){

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [tokenId, setTokenId] = useState();
  const [theme, setTheme] = useState(['art', 'sport', 'photo'])
  
  const handleText = (e) => {
    setText(e.target.value);
  }

  const uploadImage = (e) => {
    setImage(e.target.value);
  }

  const onRest = () => {
    setText("");
  }

  // DB에 nft 생성 데이터 post 요청
  async function createNft(){
    await axios.post ("https://testnets-api.opensea.io/api/v1/assets?owner=0xEcd5c913FC8B656dbfe0f2d902E1b0902de025aA&order_direction=desc&offset=0&limit=20&include_orders=false%27", {
      name: {name},
      image: {image},
      price: {price},
      theme: {theme},
      tokenId: tokenId,
      description: {desc}
    }).then(function(response){
      let data = {
        name: {name},
        image: {image},
        price: {price},
        theme: {theme},
        tokenId: tokenId,
        description: {desc}
      }
      let message = "Success 🎉";
      alert(response.data.message);
      console.log(response);
      
    }).catch(function(err){
      alert("Failed");
      console.log(err);
    })
  }


  return(

// 이름, 설명, theme 선택, 이미지업로드 -> input 
    <>
      <h1> 민팅 </h1>      
      <div>
=======
import "./Create.css";

/** 륜하
1. 사용자가 nft 생성을 위해 필요한 정보 -> 모두 input 처리 
image 클릭하면 -> local에서 image upload 

function Create() {
  return (
    /** 
1. 사용자가 nft 생성을 위해 필요한 정보 -> input 처리 
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
  const [localData, setLocalData] = useState("");
  const [work, setWork] = useState();
  // create 버튼 누르면 모든 게 합쳐져서 나오는 입력값 = work

  const onChange = (e) => setText(e.target.value);

  <button onChange={(e) => setWork(e.target.value)}> 생성 </button>;

  return (
    // 어디에다가 서버요청 하는 버튼? 같은 것을 위치시킬 것인가?

    <div>
      <br />

      <h1> Create New Item </h1>
      <h4 className="comment"> * Required fields </h4>
>>>>>>> e3846fa5e733fb36d4186a4afd004ba496e2deaa

        {/* 생성할 nft 정보 */}
        <div className="imageFile">
          <input type="file" onClick={ uploadImage(image)}/>
        </div>
        <div input type="text" placeholder="NFT Name" onChange={(e) => handleText(e)} value={name} />
        <div input type="text" placeholder="Price" onChange={(e) => handleText(e)} value={price} />
        <textarea placeholder="Description" onChange={(e) => handleText(e)} value={desc} />

<<<<<<< HEAD

        {/* 테마설정 어떻게 해야 할지 모르겠어요 ㅠㅠ */}
        <div onMouseEnter={ setTheme()}>
          {
            theme.map(function(a){
              <div> {theme} </div>
            })
          }
      </div>

      {/* 생성 및 초기화 버튼
        create 제출 -> nft 생성 및 db post 요청 */}
      </div>
      <div>
        <button onSubmit={ createNft()} style={{color: blue}}> Create </button>
      </div>
      <div>
        <button onClick={ onRest()} style={{color: blue}}> Reset </button>
      </div>

=======
      <Upload setLocalData={setLocalData} />

      <Enter text={text}> NFT 이름 </Enter>
      <Enter text={text}> Collection 이름 </Enter>
      <textarea className="des"> Description</textarea>

      <br />
      <div>
        {" "}
        <span> 테마 선택하기 </span>
        <select>
          <option value={""} /> 테마 선택
          <option value={"Art"} /> Art
          <option value={"Sport"} /> Sport
          <option value={"Phtography"} /> Photography
        </select>
      </div>

      {/* 버튼 누르면 DB으로 post 요청 보내서 입력한 내용 객체로 저장 */}
      <button class="create"> Create </button>

      <div>Create Page</div>
    </div>
  );
}
//ㅇ
// 데이터 업로드 하는 곳 - Create에서 data 받아오는 props
function Upload(props) {
  return (
    // 파일선택이라는 버튼이 아니라 큰 점선 박스로 하고 싶음... 함수?
    <input
      type="file"
      onClick={props.setLocalData("업로드하는 파일 url?")}
    ></input>
  );
}

// 입력창
function Enter(props) {
  return (
    <>
      <div> 설명하는 칸 </div>
      <input onChange={onchange} value={props.text} /> <button> 확인 </button>
>>>>>>> e3846fa5e733fb36d4186a4afd004ba496e2deaa
    </>
  );
}

export default Create;
