import React from "react";
import Nav from "../Nav";


// 

// NFT 하나 누르면 나오는 상세 페이지 

// async function handleSearch(e) {
//     setSearchValue(e.target.value);
//     await axios
//       .get(`http://localhost:8080/nft/${searchValue}`) <- params 문법
//       .then((result) => {
//         //axios({method:get , url:'/nft/${search}'})
//         console.log(result.data);
//       });
//   }


/**
const function 미술(props){
    return(
        <div> {props.art} </div>
        <h4> 이름 </h4>
        <p> 작가 </p>
        <p> 가격 </p>
        <button> Buy </button>

    )
}


 */

function Detail() {

    const [detailNft, setDetailNft] = useState();
    

    return (


        <div>
        <Nav />
        Trade Page
        </div>
    );
    }


/**
반복되는 사항 
 - nft 프로필 사진
 - nft 이름
 - nft 가격
 - price history 

props 로 상위 컴포넌트 Explore에서 art, sport, photo
 */



export default Detail;