import CodeList from "./CodeList";
import { useState, useEffect } from "react";

const CodeGubun = () => {

    const [sel, setSel] = useState("");

    const selItem = (e) => {
        console.log("-- selItem()");

        console.log(e.target.value);
        setSel(e.target.value);
        console.log("sel = " + sel); // setSel을 해도 바로 바뀌지 않음, 바뀌고 난 다음에 호출되는 것이 useEffect.
    }

    useEffect(() => {
        console.log("-- useEffect() [sel]");

        console.log("sel = " + sel);
    }, [sel]);

    return (
        <main className="container">
            <article>
                <form>
                    <div className="grid">
                        <select id="sel" name="sel" onChange={selItem}>
                            <option value="">선택</option>
                            <option value="단기예보">단기예보</option>
                            <option value="초단기예보">초단기예보</option>

                        </select>
                        <div className="grid">
                            {sel === "" ? <h3>값을 선택하세요.</h3> : <CodeList sel={sel} />}
                        </div>
                    </div>
                    <footer>
                        <ul>
                            {/* CodeList 에서 선택한 내용을 여기에서 사용해야 한다. 
                            어떻게 받아와야 하는지? sel2 와 setSel2 를 여기서 만들어서 넘기는 방법? 
                            전역 변수처럼 여러 페이지에서 사용 가능한 방법으로 바꾼다.*/}
                            <li></li>
                        </ul>
                    </footer>
                </form>
            </article>
        </main>
    );
}

export default CodeGubun;