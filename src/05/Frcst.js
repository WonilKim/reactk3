import data from './dataFrcst.json';
import style from './styles/Frcst.module.css';

// state 변수 사용 1단계 : import
import { useState } from "react";

const Frcst = () => {

    console.log(data);

    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    dtKey.map((item) => console.log(data[item]));

    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    cnKey.map((item) => console.log(data[item]));

    let dtcn = {};
    let buttons = [];

    // state 변수 사용 2단계 : 변수 선언 [변수, 변수 변경 함수]
    const [details, setDetails] = useState([]);

    const onButtonClick = (e) => {
        console.log(e.target);
        console.log(e.target.textContent);
        console.log(dtcn[e.target.textContent]);

        let result = dtcn[e.target.textContent].split(',');
        console.log(result);

        setButtonColors(e);

        setDetails(
            result.map((item) => {
                let city = item.split(':')[0].trim();
                let stat = item.split(':')[1].trim();
                console.log(city, stat);
                return (
                    <div className={style.detail_item}>
                        <div className={style.city}>{city}</div>
                        <div className={stat === '낮음' ? style.stat_low : (stat === '높음' ? style.stat_high : style.stat_normal)}>{stat}</div>
                    </div>
                )
            })
        );
    }

    const setButtons = () => {

        buttons = dtKey.map((item, idx) => {
            // console.log(item, idx);
            // console.log(data[dtKey[idx]]);
            // console.log(data[cnKey[idx]]);
            dtcn[data[dtKey[idx]]] = data[cnKey[idx]];
    
            return (
                <button id={'btn' + idx} className={style.buttons} onClick={onButtonClick}>{data[dtKey[idx]]}</button>
            );
    
        });    
    }

    const setButtonColors = (e) => {
        let btns = document.querySelectorAll("button");
        console.log(btns);

        for(let btn of btns) {
            if(btn.id === e.target.id) {
                btn.style.color = 'black';
                // btn.style.backgroundColor = 'black';
            } else {
                btn.style.color = 'white';
                // btn.style.backgroundColor = 'blue';
            }
        }
    }

    console.log(dtcn);

    setButtons();

    return (

        <main className="container">
            <article>
                <header><h1>초미세먼지 주간예보</h1></header>

                <div className="grid">
                    {buttons}
                </div>

                <footer>
                    <div className={style.detail}>{details}</div>

                </footer>
            </article>
        </main>

    );
}

export default Frcst;