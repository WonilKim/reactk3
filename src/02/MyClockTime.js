// state 변수 사용 1단계 : import
import { useState } from "react";

const MyClockTime = () => {

    // let myTime = new Date().toLocaleTimeString() ;

    // state 변수 사용 2단계 : 변수 선언 [변수, 변수 변경 함수]
    const [myTime, setTime] = useState(0);

    // tick 이벤트 처리
    const tick = () => {
        // state 변수 사용 3단계 : 변수 내용 변경
        setTime(new Date().toLocaleTimeString());
        console.log('myTime = ' + myTime);
    }

    let timer = setInterval(function() {

        if(timer != null) {
            tick();
        }

    }, 1000);

    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;