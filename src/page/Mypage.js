import { React, useState, useEffect } from "react";
import axios from "axios";


// mypage 접속 => useEffect에서 데이터 로드후 
// state에 배열값을 채우고 
// 보여지는 부분에서 state값을 통해 데이터 값을 map형식으로 보여주기


function Mypage() {

    const [mine, setMine] = useState([]);

    function onLoadData() {
        const options = {
            method: "GET",
            url: "https://testnets-api.opensea.io/api/v1/assets",
            params: {
                owner: '0xEcd5c913FC8B656dbfe0f2d902E1b0902de025aA',
                order_direction: "desc",
                offset: "0",
                limit: "20",
                include_orders: "false",
            },
            };
        
            axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setMine(response.data.assets); 
            })

            .catch(function (error) {
                console.error(error);
            });
        }

    useEffect(() => {
        onLoadData();
        console.log(mine); 
    }, []);


    function handleSell() {
        //Todo
        //buy click 시 metamask 와 smartcontract 연결되어 판매.
        return alert("Do you want to sell?");
    }

    return(
        <div>
            <div className="main_text" > My page </div>  

        { 
            mine.map((value, key) => {
                return(
                    <div className="mypage_nft_box">
                        <div className="overflow_box">
                            <img className="mypage_img" 
                            src={value.image_url}></img>
                            <div className="mypage_text">
                            <div> {value.name} </div>
                            <div > {value.price} </div>
                            </div>
                            <button className="mypage_button" onClick={handleSell}> Sell </button>
                        </div>
                    </div>
                )
            })
        }

        </div>
    )

}


export default Mypage;