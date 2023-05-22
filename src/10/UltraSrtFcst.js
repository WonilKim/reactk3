import FcstTable from "./FcstTable";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import qs from "query-string";

const UltraSrtFcst = () => {

    const loc = useLocation().search;

    console.log("loc = ", loc);

    const date = qs.parse(loc).date;
    const code = qs.parse(loc).code;
    const nx = qs.parse(loc).nx;
    const ny = qs.parse(loc).ny;

    console.log("date = ", date);
    console.log("code = ", code);
    console.log("nx = ", nx);
    console.log("ny = ", ny);

    const [items, setItems] = useState([]);

    let dataCount = 100;
    let pageNumber = 1;

    const endPoint = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";
    const getData = () => {
        console.log("getData()");

        // e.preventDefault();

        let paramServiceKey = "ServiceKey=" + "bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D";
        let paramPageNo = "pageNo=" + pageNumber;
        let paramNumOfRows = "numOfRows=" + dataCount;
        let paramType = "dataType=" + "JSON";
        let paramBaseDate = "base_date=" + date;
        let paramBaseTime = "base_time=" + "0000";
        let paramNx = "nx=" + nx;
        let paramNy = "ny=" + ny;

        // https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&pageNo=1&numOfRows=1000&dataType=XML&base_date=20210628&base_time=0630&nx=55&ny=127
        // https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?ServiceKey=bDGAQNJcfogHI9UKaWvKrPWoDTYN53jAz7PJEVfIrlNRw3umqGcHxEWqhGthY23u01QoXK%2F8RUfU%2F4ch19XygQ%3D%3D&pageNo=1&numOfRows=100&dataType=JSON&base_date=20230522&base_time=0000&nx=60&ny=127
        let url = endPoint +
            "?" + paramServiceKey + "&" + paramPageNo + "&" + paramNumOfRows + "&" + paramType
             + "&" + paramBaseDate + "&" + paramBaseTime + "&" + paramNx + "&" + paramNy;
        console.log("url = ", url);

        fetch(url)
        .then((resp) => resp.json())    // 처음 응답이 오면, json 으로 바꾼다.
        .then((data) => {   // json 으로 바뀐 데이터가 들어오면, 아래 코드 수행.
            console.log("data = ", data);
            setItems(data["response"]["body"]["items"]["item"]);
            console.log("data['response']['body']['items']['item'] = ", data["response"]["body"]["items"]["item"]);

        });

    }

    getData();

    return (
        <article>
            <header>UltraSrtFcst</header>
            {items.length > 0 ? <FcstTable items={items}/> : <></>}
            
        </article>
    );
}

export default UltraSrtFcst;