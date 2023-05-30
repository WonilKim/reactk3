import { Link } from "react-router-dom";
import { CntAtoms, CntAtomsTwice } from "./CntAtoms";
import { useRecoilValue } from "recoil";

const CntDisp = () => {
    console.log("-- CntDisp()");

    // const [count, setCount] = useRecoilState(CntAtoms);
    // setCount 가 필요 없기 때문에 useRecoilState 가 아니라 useRecoilValue 를 사용.
    const count = useRecoilValue(CntAtoms);
    
    const count2 = useRecoilValue(CntAtomsTwice);

    return (
        <article>
            <h3>입력값 : {count}, 입력값 2배 : {count2}</h3>
            <footer>
                <nav>
                    <ul>
                        <li><Link to="/Cnt" role="button">입력 페이지로 이동</Link></li>
                    </ul>
                </nav>
            </footer>
        </article>
    );
}

export default CntDisp;