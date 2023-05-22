import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import FcstNav from './FcstNav';
import jsonData from './getxy.json';

const FcstMain = () => {
    console.log("-- FcstMain()");

    const [selCode, setSelCode] = useState(0);
    const [selDate, setSelDate] = useState(0);
    const [selNx, setSelNx] = useState(0);
    const [selNy, setSelNy] = useState(0);
    const dtRef = useRef();
    const cityRef = useRef();

    const ops = jsonData.map((item) =>
        <option key={item["행정구역코드"]} value={item["행정구역코드"]}>{item["1단계"]}</option>
    )

    // console.log(jsonData);

    useEffect(() => {
        console.log("-- useEffect()");
        let today = new Date();
        let todayString = today.toISOString().split('T')[0];
        let todayNumbers = todayString.replaceAll('-', '');
        console.log(todayNumbers);

        dtRef.current.value = todayString;

        console.log("dtRef.current.value = ", dtRef.current.value);
        console.log("dtRef.current = ", dtRef.current);
        console.log("cityRef.current.value = ", cityRef.current.value);
        console.log("cityRef.current = ", cityRef.current);

        setSelDate(todayNumbers);
        setSelCode(cityRef.current.value);
        setXYFromCode(cityRef.current.value);

    }, [])

    const getDate = () => {
        console.log("-- getDate()");
        console.log("dtRef.current.value = ", dtRef.current.value);
        setSelDate(dtRef.current.value.replaceAll('-', ''));
        
        // 값이 바로 업데이트 되지 않는다. 
        // (함수가 종료된 후 필요 부분 렌더링 되는 것으로 예상)
        console.log("selDate = ", selDate);

    }

    const setXYFromCode = (code) => {
        console.log("-- setXYFromCode (" + code + ")");

        for (let item of jsonData) {
            // console.log("item['행정구역코드'] = " + item["행정구역코드"]);
            if (item["행정구역코드"].toString() === code.toString()) {
                // console.log("Found");
                setSelNx(item['격자 X']);
                setSelNy(item['격자 Y']);
                break;
            }
        }
    }

    const cityChanged = (e) => {
        console.log("-- cityChanged(e)");
        setSelCode(e.target.value);
        console.log(e.target.value);
        setXYFromCode(e.target.value);
    }

    return (
        <article>
            <main className='container'>
                <header>
                    <h1>FcstMain</h1>
                    <FcstNav />
                </header>
                <div className='grid'>
                    <div>
                        <input ref={dtRef} type='date' id='dt' name='dt' onChange={() => getDate()} />
                    </div>
                    <div>
                        <select ref={cityRef} id='sel' name='sel' onChange={(e) => cityChanged(e)}>
                            {ops}
                        </select>
                    </div>

                </div>
                <footer>
                    <div className='grid'>
                        <Link to={"/UltraSrtFcst?date=" + selDate + "&code=" + selCode + "&nx=" + selNx + "&ny=" + selNy} role="button">초단기예보</Link>
                        <Link to={"/VilageFcst?date=" + selDate + "&code=" + selCode + "&nx=" + selNx + "&ny=" + selNy} role="button">단기예보</Link>
                    </div>
                </footer>
            </main>

        </article>
    );
}

export default FcstMain;