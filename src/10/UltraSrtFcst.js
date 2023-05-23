import FcstTable from "./FcstTable";

import { useLocation } from "react-router-dom";
import qs from "query-string";

import { format } from "date-fns";

const UltraSrtFcst = () => {
    console.log("-- UltraSrtFcst()");

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

    let ultraCategory = {
        "T1H": "기온 (℃)",
        "RN1": "1시간 강수량 (mm)",
        "SKY": "하늘상태",
        "UUU": "동서바람성분 (m/s)",
        "VVV": "남북바람성분 (m/s)",
        "REH": "습도 (%)",
        "PTY": "강수형태",
        "LGT": "낙뢰 (kA)",
        "VEC": "풍향 (deg)",
        "WSD": "풍속 (m/s)"
    }

    // - 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
    // - 강수형태(PTY) 코드 : (초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7) 
    //                       (단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4) 


    let today = new Date();
    console.log("today = " + today);
    today.setHours(today.getHours() - 1);
    let formattedHour = format(today, "HH");
    console.log("formattedHour = " + formattedHour);

    const endPoint = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst";
    let dataCount = 60;
    const baseTime = formattedHour + "00"; // 0630 발표
    console.log("baseTime = " + baseTime);

    return (
        <article>
            <header><h2>초단기 예보</h2></header>
            <FcstTable date={date} nx={nx} ny={ny} category={ultraCategory}
                endPoint={endPoint} dataCount={dataCount} baseTime={baseTime} />

        </article>
    );


}

export default UltraSrtFcst;