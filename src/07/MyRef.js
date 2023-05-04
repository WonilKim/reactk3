import { useState, useRef, useEffect } from "react";

const MyRef = () => {

    const txtRef = useRef();

    const itemArr = useRef([]);

    const [itemTags, setItemTags] = useState();

    // 페이지가 새로 로드될 때 txtRef 변수가 ref 속성으로 지정된 컴포넌트에 포커스 지정
    useEffect(() =>{
        txtRef.current.focus();
    }, []);

    const addItem = (e) => {
        console.log("addItem()");

        e.preventDefault();

        itemArr.current = [... itemArr.current, txtRef.current.value];
        console.log("itemArr.current = ", itemArr.current);
    }

    const resetItem = (e) => {
        console.log("resetItem()");
        
    }

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                {/* <label for="txt1">과일 채소 입력</label> */}
                                <label htmlFor="txt1">과일 채소 입력</label>
                                <input ref={txtRef} type="text" id="txt1" name="txt1" required />
                                {/* 컴포넌트를 제어하려면 useRef 변수를 ref 속성으로 지정해 줘야 한다 */}
                            </div>
                            <div>
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>
                    </form>
                </header>
                <div className="grid">
                    {itemTags}
                </div>
            </article>
        </main>
    );
}
export default MyRef;