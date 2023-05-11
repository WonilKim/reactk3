import style from './MyDiv.module.css';   // 부분 스타일 (지정한 부분만 적용됨)

// state 변수 사용 1단계
import { useState } from 'react';

// const MyDivArticle = (probs) => {
//     // 파라미터(속성값) 전체를 받는 방법 
//     // 컴포넌트를 사용하는 부분의 태그의 속성이 probs 파라미터로 전달됨.
//     const aname = probs.aname;

//     return (
//         <article>
//             {/* probs.태그 속성 이름 */}
//             <header><h1>{aname || 'MyDiv0'}</h1></header>
//             <ul>
//                 {/* falsy 연산 및 3항 연산 사용으로 undefined 방지 */}
//                 <li>{aname || 'MyDiv0' + '1'}</li>
//                 <li>{aname || 'MyDiv0'}2</li>
//                 <li>{aname ? aname : 'MyDiv0'}2</li>
//             </ul>
//         </article>
//     );
// }
// ( probs )

const MyDivArticle = ({ aname }) => {
    // 파라미터(속성값)을 지정해 받는 방법 
    // 컴포넌트를 사용하는 부분의 태그의 속성이 {aname} 파라미터로 전달됨.

    let n = aname === undefined ? '0' : aname.slice(-1);
    console.log('n = ' + n);

    //let cnt = 0;
    // // click 이벤트 처리
    // const like = () => {
    //     cnt++;
    //     console.log('cnt = ' + cnt);
    // }

    // state 변수 사용 2단계 : 변수 선언 [변수, 변수 변경 함수]
    const [cnt, setCnt] = useState(0);

   // click 이벤트 처리
    const like = () => {
        // state 변수 사용 3단계 : 변수 내용 변경
        setCnt(cnt + 1);
        console.log('cnt = ' + cnt);
    }

    // click 이벤트 처리
    const likeParam = (n) => {
        cnt += n;
        console.log('cnt = ' + cnt);
    }

    return (
        <article>
            {/* probs.태그 속성 이름 */}
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{'MyDiv' + n}</li>
                {/* falsy 연산 및 3항 연산 사용으로 undefined 방지 */}
                <li className={style.ali}>{(aname || 'MyDiv') + '1'}</li>
                <li className={style.ali}>{aname || 'MyDiv'}2</li>
                <li className={style.ali}>{aname ? aname : 'MyDiv'}3</li>
            </ul>
            {n === '1' &&
                // Truesy 연산
                <footer>
                    {/* 매개 변수가 없는 함수 전달 방법 */}
                    <h2><span onClick={like}>🧡</span> {cnt}</h2>
                    {/* 매개 변수가 있는 함수 전달 방법 */}
                    {/* <h2><span onClick={() => likeParam(2)}>🧡</span> {cnt}</h2> */}

                    {/* 클릭을 해도 화면에 구성된 cnt 값은 바뀌지 않는다. 재 랜더링 해줘야 함. 
                    컴포넌트의 라이프 싸이클 안에서 업데이터 해줘야함. */}
                </footer>

            }
        </article>

    );
}


export default MyDivArticle;
// export 가 있어야 App.js 에서 import 할 수 있다.