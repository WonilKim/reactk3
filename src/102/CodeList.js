import code from '../10/getcode.json';
import { useState, useEffect } from 'react';

// const CodeList = (probs) => {
//     console.log("probs = " + probs);

const CodeList = ({sel}) => {   // Object 로 넘어오기 때문에 Object 표시 {} 를 해준다.
    console.log("-- CodeList()");

    console.log("sel = " + sel);

    let temp = code.filter((i) => i["예보구분"] === sel);
    console.log(temp);

    let opTags = temp.map((i) =>
        <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
    );

    return (
        <>
            <select id='sel2' name='sel2'>
                <option value="">선택</option>
                {opTags}
            </select>
        </>
    );
}

export default CodeList;