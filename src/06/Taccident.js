import dataTaccident from './dataTaccident.json';
import TaccidentNav1 from './TaccidentNav1';
import TaccidentNav2 from './TaccidentNav2';
import style from './styles/Taccident.module.css'
import { useState, useEffect } from 'react';

const Taccident = () => {

    let data = dataTaccident['data'];
    // console.log(data);

    let setC1 = new Set();

    for (let d of data) {
        setC1.add(d['사고유형_대분류']);
    }
    // console.log(setC1);
    let c1 = [...setC1];
    // console.log(c1.length);

    // // for 를 쓰는 방법
    // let c2 = [];
    // for(let item of data) {
    //     let temp = [];
    //     temp.push(item.사고유형_대분류);
    //     temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }

    // map 을 쓰는 방법
    const c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);

    // console.log('c2 = ', c2);

    // 대분류 선택
    const [sel1, setSel1] = useState(0);
    // 중분류 선택
    const [sel2, setSel2] = useState([]);
    // 상세 데이터 선택
    const [selData, setSelData] = useState(<></>);

    // 처음 렌더링 될때만 실행됨
    useEffect(() => {
        console.log('-- Taccident sel1 useEffect = []', sel1);
    }, []);

    // sel1 이 바뀌면 실행됨
    useEffect(() => {
        console.log('-- Taccident sel1 useEffect sel1', sel1);
    }, [sel1]);

    // sel2 가 바뀌면 실행됨
    useEffect(() => {
        console.log('-- Taccident sel2 useEffect sel2', sel2);

        // console.log('sel2[0] = ', sel2[0]);
        // console.log('sel2[1] = ', sel2[1]);

        // sel2 가 선택되면 상세 데이터 표시
        // 대분류와 중분류가 같은것을 뽑아냄
        let temp = data.filter((item) =>
            item.사고유형_대분류 === sel1 && item.사고유형_중분류 === sel2);

        console.log('temp.length', temp.length);


        if (temp.length > 0) {
            
            let obj = new Object(temp[0]);
            // console.log('temp[0]', temp[0]);
            // console.log('obj', obj);
            let objKeys = [];
            let objValues = [];
            for (let k of Object.keys(obj)) {
                console.log('k, obj[k]', k, obj[k]);
                objKeys.push(k);
                objValues.push(obj[k]);
            }

            setSelData(
                objKeys.filter((item)=>item.includes("사고유형") === false).map((item) => {
                    return (
                        <div key={item}>{item} : {obj[item]}</div>
                    );
                })
            );

        }

    }, [sel2]);

    useEffect(() => {
        console.log('-- Taccident selData useEffect selData', selData);
    }, [selData]);

    // sel1 이나 sel2 가 바뀌면 실행됨
    useEffect(() => {
        console.log('-- Taccident sel1 useEffect', sel1);
        console.log('-- Taccident sel2 useEffect', sel2);
    });


    return (
        <main className='container'>
            <article>
                <header>
                    <h1>사고유형별 교통사고 통계</h1>
                </header>

                <TaccidentNav1 c1={c1} c2={c2} sel1={sel1} setSel1={setSel1} />
                <TaccidentNav2 c1={c1} c2={c2} sel1={sel1} sel2={sel2} setSel2={setSel2} />
                <div className='grid'>{selData}</div>
            </article>

        </main>
    );
}

export default Taccident;