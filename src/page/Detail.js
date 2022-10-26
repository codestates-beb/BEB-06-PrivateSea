import React from "react";

//props.allNfts 애들을 filter 처리로 _id 가  clickedNft 인 애들만 남게하고 map 처리
//owner, name, price, url, buy
function Detail(props) {
  const id = props.clickedNft;
  return (
    <div className="detail_page" >
      {props.allNftsforDetail
        .filter((a) => a.tokenid == id)
        .map((i, a) => {
          return (
            <div key={a}>
              <img  className="detail_img"  src={i.url} />
              <div className="detail_text_box" >
                <div className="detail_name" >{i.name}</div>
                <div className="detail_d" >
                  <div className="detail_d_text" >Sale ends November 24, 2022 at 11:11pm GMT+9 </div>
                  <div className="current_price" > Current price</div>
                  <div className="detail_price" >{i.price}</div>
                  <div className="detail_button" value={i._id}  onClick={props.handleBuy}>buy</div>
                </div>

                <div className="owned" >Owned by : {i.owner}</div>
              </div>
            
            </div>
          );
        })}
    </div>
  );
}

export default Detail;
