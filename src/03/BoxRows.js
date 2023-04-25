import { useState } from "react";

// const BoxRows = (probs) => {
const BoxRows = ({ mv }) => {
    // const mvlist = [...probs.mv] ;
    //console.log("boxrows",mv)

    const [footTag, setFootTag] = useState(0);

    const showMv = (row) => {
        console.log(row);
        setFootTag(row.movieCd);
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
                    <td colSpan={4}>{footTag}</td>
                </tr>
            </tfoot>

        </>
    );
}

export default BoxRows;