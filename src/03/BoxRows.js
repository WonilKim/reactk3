import { useState } from "react";
import style from './styles/BoxRows.module.css';

// react study
// lQ0rzJKE71aNnkhePuqn
// GkjSTQqtru

// reactk3
// 9_FRlCw3hbVXJH_6W8p_
// wmaIJ4FX91


// const BoxRows = (probs) => {
const BoxRows = ({ mv }) => {
    // const mvlist = [...probs.mv] ;
    //console.log("boxrows",mv)

    const [footTag, setFootTag] = useState("정보를 확인하시려면 영화를 선택하세요.");

    const showMv = (row) => {
        let msg = "[" + row.movieCd + "] " + row.movieNm + ", 개봉일 : " + row.openDt;
        console.log(msg);
        setFootTag(msg);
        // [영화코드] 영화명 개봉일:2023-01-02
    }

    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '⏺️';
        else if (intent < 0) icon = '⬇️';
        else icon = '⬆️';

        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{intent === 0 ? '' : icon}{intent === 0 ? '' : Math.abs(intent)}</td>
            </tr>
        );
    }

    console.log(trTags);
    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot>
                <tr>
                    <td className={style.foot_td} colSpan={4}>{footTag}</td>
                </tr>
            </tfoot>

        </>
    );
}

export default BoxRows;