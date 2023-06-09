import { useState } from "react";
import style from './styles/BoxRows.module.css';

// react study
// lQ0rzJKE71aNnkhePuqn
// GkjSTQqtru

// reactk3
// 9_FRlCw3hbVXJH_6W8p_
// wmaIJ4FX91


// const BoxRows = (probs) => {
const BoxRows = (probs) => {
    // const mvlist = [...probs.mv] ;
    //console.log("boxrows",mv)

    let mv = probs.mv;
    let footTag = probs.footTag;
    let setFootTag = probs.setFootTag;

    // console.log('mv = ', mv);
    // if(mv.length > 0) {
    //     console.log('mv.length > 0');
    //     setFootTag("정보를 확인하시려면 영화를 선택하세요.");
    // }

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
                <td className={intent > 0 ? style.colorGreen : (intent < 0 ? style.colorRed : "")}>{row.rank}</td>
                <td className={intent > 0 ? style.colorGreen : (intent < 0 ? style.colorRed : "")}>{row.movieNm}</td>
                <td className={intent > 0 ? style.colorGreen : (intent < 0 ? style.colorRed : "")}>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td className={intent > 0 ? style.colorGreen : (intent < 0 ? style.colorRed : "")}>{intent === 0 ? '' : icon}{intent === 0 ? '' : intent}</td>
                {/* <td>{intent === 0 ? '' : icon}{intent === 0 ? '' : Math.abs(intent)}</td> */}
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