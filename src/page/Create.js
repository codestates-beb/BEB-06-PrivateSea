/* eslint-disable */

import { React, useState } from "react";
import axios from "axios";

function Create(){

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [tokenId, setTokenId] = useState();
  const [theme, setTheme] = useState(['art', 'sport', 'photo'])
  
  // const handleText = (e) => {
  //   setText(e.target.value);
  // }

  // const uploadImage = (e) => {
  //   setImage(e.target.value);
  // }

  // const onRest = () => {
  //   setText("");
  // }

  // DB에 nft 생성 데이터 post 요청
  // async function createNft(){
  //   await axios.post ("http://localhost:8080/nft/", {
  //     name: {name},
  //     image: {image},
  //     price: {price},
  //     theme: {theme},
  //     tokenId: tokenId,
  //     description: {desc}
  //   }).then(function(response){
  //     let data = {
  //       name: {name},
  //       image: {image},
  //       price: {price},
  //       theme: {theme},
  //       tokenId: tokenId,
  //       description: {desc}
  //     }
  //     let message = "Success 🎉";
  //     alert(response.data.message);
  //     console.log(response);
      
  //   }).catch(function(err){
  //     alert("Failed");
  //     console.log(err);
  //   })
  // }


  return(

// 이름, 설명, theme 선택, 이미지업로드 -> input 
    <>
      <h1> 민팅 </h1>      
      <div>

        {/* 생성할 nft 정보 */}
        <div className="imageFile" />
          {/* <input type="file" /> */}
        {/* </div> */}
        <input type="text" placeholder="Name"  />
        <input type="text" placeholder="Price"   />
        <textarea placeholder="Description"   />




      {/* 생성 및 초기화 버튼
        create 제출 -> nft 생성 및 db post 요청 */}
      </div>
      <div>
        <button  style={{color: "blue"}}> Create </button>
      </div>
      <div>
        <button  style={{color: "blue"}}> Reset </button>
      </div>

    </>
  );
}

export default Create;
