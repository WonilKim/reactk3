import BoxRows from './BoxRows';

import style from './styles/Box.module.css'

import { useState, useEffect, useRef } from 'react';


document.addEventListener("DOMContentLoaded", () => {
    // let date = new Date();
    // date.setDate(date.getDate() - 1);   // yesterday
    // let yesterday = date.toISOString().split('T')[0].replaceAll('-', '');
    // console.log(yesterday);

    // document.querySelector("#dt1")
})

const Box = () => {


    const [mvList, setMvList] = useState([]);
    const [footTag, setFootTag] = useState("정보를 확인하시려면 영화를 선택하세요.");

    // http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
    const dt1Ref = useRef();

    let seldt;

    useEffect(() => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);   // yesterday
        let yesterdayString = yesterday.toISOString().split('T')[0];
        let yesterdayNumbers = yesterdayString.replaceAll('-', '');
        console.log(yesterdayNumbers);

        dt1Ref.current.value = yesterdayString;

        console.log("dt1Ref.current.value = ", dt1Ref.current.value);
        console.log("dt1Ref.current = ", dt1Ref.current);

        setDisplay(yesterdayNumbers);
    }, [])

    const getDate = () => {
        console.log("dt1Ref = ", dt1Ref.current.value);
        seldt = dt1Ref.current.value.replaceAll('-', '');
        console.log("seldt = ", seldt);

        setDisplay(seldt);
    }

    const setDisplay = (dateString) => {
        let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="
            + dateString;

        fetch(url)
            .then((resp) => resp.json())    // 처음 응답이 오면, json 으로 바꾼다.
            .then((data) => {   // json 으로 바뀐 데이터가 들어오면, 아래 코드 수행.
                setMvList(data.boxOfficeResult.dailyBoxOfficeList);
                for (let box of mvList) {
                    console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten)
                }

            })
            .catch((err) => {
                console.log(err);
            });

    }

    return (
        <main className="container">
            <article>
                <header>
                    <nav>
                        <ul><li>
                            <h1>일일박스오피스</h1>
                        </li></ul>
                        <ul><li>
                            <input ref={dt1Ref} type='date' id='dt1' name='dt1' onChange={() => getDate()} />
                        </li></ul>

                    </nav>


                </header>
                <table>
                    <thead>
                        <tr className={style.thead_tr}>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>

                    <BoxRows mv={mvList} footTag={footTag} setFootTag={setFootTag} />
                    {/* <BoxRows mv={boxlist} /> */}

                </table>
            </article>
        </main>
    );
}

export default Box;
