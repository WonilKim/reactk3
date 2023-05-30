import { useState, useEffect, useRef } from "react";

import CntDisp from "./CntDisp";
import CntInput from "./CntInput";

const Cnt_1 = () => {
    console.log("-- Cnt()");

    const [count, setCount] = useState(0);

     return (
        <main className="container">
            <CntInput count={count} setCount={setCount} />
            <CntDisp count={count}/>
        </main>
    );
}

export default Cnt_1;