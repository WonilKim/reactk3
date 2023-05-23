import FcstTable from "./FcstTable";

import { useLocation } from "react-router-dom";
import qs from "query-string";

const VilageFcst = () => {
    console.log("-- VilageFcst()");

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

    let vilageCategory = {
        "POP": "강수확률 (%)",
        "PTY": "강수형태",
        "PCP": "1시간 강수량 (mm)",
        "REH": "습도 (%)",
        "SNO": "1시간 신적설 (cm)",
        "SKY": "하늘상태",
        "TMP": "1시간 기온 (℃)",
        "TMN": "일 최저기온 (℃)",
        "TMX": "일 최고기온 (℃)",
        "UUU": "동서바람성분 (m/s)",
        "VVV": "남북바람성분 (m/s)",
        "WAV": "파고 (M)",
        "VEC": "풍향 (deg)",
        "WSD": "풍속 (m/s)"
    }
    // - 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
    // - 강수형태(PTY) 코드 : (초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7) 
    //                       (단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4) 


    const endPoint = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"

    const dataCount = 1000;
    const baseTime = "0500";

    return (
        <article>
            <header><h2>단기 예보</h2></header>
            <FcstTable date={date} nx={nx} ny={ny} category={vilageCategory}
                endPoint={endPoint} dataCount={dataCount} baseTime={baseTime} />

        </article>
    );
}

export default VilageFcst;