import { useState, useRef, useEffect } from "react";
import style from './styles/MyRef.module.css';

const MyRef = () => {

    const txtRef = useRef();

    const itemArr = useRef([]);

    const [itemTags, setItemTags] = useState();

    // 페이지가 새로 로드될 때 txtRef 변수가 ref 속성으로 지정된 컴포넌트에 포커스 지정
    useEffect(() => {
        txtRef.current.focus();
    }, []);

    const setOutput = () => {
        if(txtRef.current.value === "")
            return;
            
        itemArr.current = new Set([...itemArr.current, txtRef.current.value]);
        console.log("itemArr.current = ", itemArr.current);

        setItemTags(
            [...itemArr.current].map((item) =>
                <span key={item} className={style.output}>{item}</span>
            )
        );

        txtRef.current.value = "";

    }

    const addItem = (e) => {
        console.log("addItem()");

        e.preventDefault();

        setOutput();

    }

    const resetItem = (e) => {
        console.log("resetItem()");

        e.preventDefault();

        itemArr.current = new Set();
        // console.log(txtRef.current);
        txtRef.current.value = "";

        setItemTags(<></>);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log("handleKeyDown() enter");
            // 👇 Get input value
            setOutput();
        }
      };

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                {/* <label for="txt1">과일 채소 입력</label> */}
                                <label htmlFor="txt1">과일 채소 입력</label>
                                <input ref={txtRef} type="text" id="txt1" name="txt1" onKeyDown={handleKeyDown} required />
                                {/* 컴포넌트를 제어하려면 useRef 변수를 ref 속성으로 지정해 줘야 한다 */}
                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div>
                    <div className={style.outputBox}>
                        {itemTags}
                    </div>
                </div>
            </article>
        </main>
    );
}
export default MyRef;